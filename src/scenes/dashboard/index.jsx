import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to AdvocateUs Dashboard" />
        {/* Add Quick Action Button if required */}
        <Button variant="contained" color="#4cceac">
          Add New Case
        </Button>
      </Box>

      {/* Features Overview */}
      <Box mt="20px" p="20px" bgcolor="primary" borderRadius="8px" boxShadow={2}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Features Overview
        </Typography>
        <Typography variant="body1" mb={1}>
          - Quick Case Updates: Stay informed with recent updates on your cases.
        </Typography>
        <Typography variant="body1" mb={1}>
          - Client Management: View and manage your client information in one place.
        </Typography>
        <Typography variant="body1" mb={1}>
          - Task Insights: Access upcoming tasks and deadlines through the integrated calendar.
        </Typography>
        <Typography variant="body1">
          - Notifications: Keep track of important alerts and updates directly from the notification center.
        </Typography>
      </Box>

      {/* Quick Access Section */}
      <Box mt="20px" p="20px" bgcolor="primary" borderRadius="8px" boxShadow={2}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Quick Access
        </Typography>
        <Typography variant="body1" mb={1}>
          - Search Bar: Find clients, cases, or invoices instantly.
        </Typography>
        <Typography variant="body1" mb={1}>
          - Profile Settings: Update your profile information seamlessly through the Profile Form.
        </Typography>
        <Typography variant="body1">
          - Charts and Analytics: Visualize data through bar and pie charts for better understanding of your financials and performance.
        </Typography>
      </Box>

      {/* Expenses Section */}
      <Box mt="20px" p="20px" bgcolor="primary" borderRadius="8px" boxShadow={2}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Expenses Page
        </Typography>
        <Typography variant="body1" mb={1}>
          - Expense Overview: View all your expenses in a consolidated list.
        </Typography>
        <Typography variant="body1" mb={1}>
          - Add New Expenses: Record and categorize expenses easily using the “Add Expense” feature.
        </Typography>
        <Typography variant="body1" mb={1}>
          - Visual Insights: Analyze your spending trends with bar and pie charts.
        </Typography>
        <Typography variant="body1" mb={1}>
          - Expense Reminders: Set reminders for recurring expenses.
        </Typography>
        <Typography variant="body1">
          - Export Options: Download expense reports in PDF or Excel formats.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
