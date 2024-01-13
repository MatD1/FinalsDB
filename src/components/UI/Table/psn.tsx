"use client";

import React, { useState, useEffect, forwardRef } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { DebounceInput } from "react-debounce-input";
import Fuse from "fuse.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography } from "@mui/material";

interface LeaderboardData {
  name: string;
  r: number;
  steam: string;
  xbox: string;
  psn: string;
  c: number;
  of: number;
}

interface Props {
  data: LeaderboardData[];
}

const PSNTable: React.FC<Props> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<LeaderboardData[]>(data);
  const [visibleData, setVisibleData] = useState<LeaderboardData[]>(
    data.slice(0, 20)
  ); // Initial load of 20 items
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fuse = new Fuse(data, {
      keys: ["name", "rank"],
      includeScore: true,
      threshold: 0.4,
    });

    const filtered = searchTerm
      ? fuse.search(searchTerm).map((result) => result.item)
      : data;

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
    setVisibleData(filtered.slice(0, 20));
  }, [searchTerm, data]);

  const loadMoreData = () => {
    const startIndex = currentPage * 20;
    const endIndex = (currentPage + 1) * 20;
    const nextData = filteredData.slice(startIndex, endIndex);

    setVisibleData((prevVisibleData) => [...prevVisibleData, ...nextData]);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const CustomTextField = forwardRef<
    HTMLInputElement,
    React.ComponentProps<typeof TextField>
  >((props, ref) => {
    // Customize the TextField component here
    return <TextField variant="outlined" inputRef={ref} {...props} />;
  });
  return (
    <Box>
      {/* Use DebounceInput for debouncing the input */}
      <Box marginBottom={5}>
        <DebounceInput
        //@ts-ignore
          element={CustomTextField}
          label="Search"
          variant="outlined"
          value={searchTerm}
          minLength={2} // Adjust minLength based on your preference
          debounceTimeout={300}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <TableContainer component={Paper}>
        <InfiniteScroll
          dataLength={visibleData.length}
          next={loadMoreData}
          hasMore={visibleData.length < filteredData.length}
          loader={<h4>Loading...</h4>}
          endMessage={<Typography marginX={5}>No more items</Typography>}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Playstation Name</TableCell>
                <TableCell>Cashouts $ Value</TableCell>
                <TableCell>Fame</TableCell>
                <TableCell align="right">Rank</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell>${item.c}</TableCell>
                  <TableCell>{item.of}</TableCell>
                  <TableCell align="right">{item.r}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </InfiniteScroll>
      </TableContainer>
    </Box>
  );
};

export default PSNTable;
