import React from "react";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";

const mockMetrics = [
  { id: "1", title: "Expense Dated Last...", value: "1000" },
  { id: "2", title: "Total Amount Of Exp...", value: "8000" },
  { id: "3", title: "Expense Dated Last...", value: "2000" },
  { id: "4", title: "Total Amount Of Exp...", value: "5000" },
];

const ExpenseScreen = () => {
  return (
    <Box p={2}>
      {/* Header */}
      <Typography variant="h5" gutterBottom>
        All
      </Typography>

      {/* Metrics Section */}
      <Grid container spacing={2}>
        {mockMetrics.map((metric) => (
          <Grid item xs={12} sm={6} md={3} key={metric.id}>
            <Paper
              elevation={3}
              sx={{
                padding: "16px",
                textAlign: "center",
                height: "100%",
              }}
            >
              <Typography variant="subtitle1">{metric.title}</Typography>
              <Typography variant="h4" color="primary">
                {metric.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Buttons */}
      <Box
        mt={2}
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="flex-start"
      >
        <Button variant="contained" color="primary">
          Filter
        </Button>
        <Button variant="contained" color="secondary">
          Export
        </Button>
        <Button variant="contained" color="success">
          + Add Expense
        </Button>
      </Box>

      {/* Empty State */}
      <Box mt={3} textAlign="center">
        <Typography variant="body1" color="textSecondary">
          No Expense Added.
        </Typography>
      </Box>

      {/* Pagination */}
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Button variant="outlined">Previous</Button>
        <Button variant="outlined">Next</Button>
      </Box>
    </Box>
  );
};

export default ExpenseScreen;
