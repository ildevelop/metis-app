import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Error from "@mui/icons-material/Error";
import Circle from "@mui/icons-material/Circle";
import styled from "styled-components";

import { isLoading, rulesSelector } from "../reducers/mainReducer";
import Loader from "./Loader";

const RuleTable = () => {
  const loading = useSelector(isLoading);
  const rules = useSelector(rulesSelector);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableH>
            <TableRow>
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell align="left">
                <b>Status</b>
              </TableCell>
              <TableCell align="left">
                <b>Info</b>
              </TableCell>
              <TableCell align="left">
                <b>Message</b>
              </TableCell>
              <TableCell align="left">
                <b>Priority</b>
              </TableCell>
            </TableRow>
          </TableH>
          <TableBody>
            {rules.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">
                  <Circle color={row.status === "failed" ? "error" : "success"} />
                </TableCell>
                <TableCell align="left">{row.info}</TableCell>
                <TableCell align="left">{row.message}</TableCell>
                <TableCell align="left">
                  {row.priority && (
                    <Flex>
                      {row.priority}
                      <Error color={row.priority === "high" ? "warning" : "info"} />
                    </Flex>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Container = styled.div`
  display: flex;
  justify-content: "center";
  margin-top: 50px;
  min-width: 90vw;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;
const TableH = styled(TableHead)`
  background: #5b32b4;
`;

export default RuleTable;
