"use client";
import { useState } from "react";
import {
  TextField,
  Slider,
  Typography,
  Box,
  Button,
  Grid,
  Tabs,
  Tab,
  Container,
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const SIP = () => {
  const [amount, setAmount] = useState(5000);
  const [duration, setDuration] = useState(5);
  const [rate, setRate] = useState(12);
  const [tabIndex, setTabIndex] = useState(0);

  const router = useRouter(); // Initialize useRouter

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  // SIP Calculation
  const investedAmount = amount * 12 * duration;
  const estimatedReturns =
    investedAmount * Math.pow(1 + rate / 100, duration) - investedAmount;
  const sipTotalValue = investedAmount + estimatedReturns;

  // Lumpsum Calculation
  const lumpsumTotalValue = amount * Math.pow(1 + rate / 100, duration);

  // Advanced SIP Calculation (same as SIP for this example)
  const advancedSipTotalValue = sipTotalValue;

  // Data for Pie Chart
  const data =
    tabIndex === 0
      ? [
          { name: "Invested Amount", value: investedAmount, color: "#f97316" },
          {
            name: "Estimated Returns",
            value: estimatedReturns,
            color: "#6366f1",
          },
        ]
      : tabIndex === 1
      ? [{ name: "Total Value", value: lumpsumTotalValue, color: "#4ade80" }]
      : [
          {
            name: "Total Value",
            value: advancedSipTotalValue,
            color: "#9d6e30",
          },
        ];

  return (
    <>
      <Container>
        <Box elevation={3} sx={{ padding: 4 }}>
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="SIP Investment" />
            <Tab label="Lumpsum Amount" />
            <Tab label="Advanced SIP" />
          </Tabs>

          {tabIndex === 0 && (
            <Grid container spacing={4} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  SIP Returns Estimator
                </Typography>
                <Box mt={2}>
                  <TextField
                    label="Enter SIP Amount"
                    variant="outlined"
                    fullWidth
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    InputProps={{
                      startAdornment: "₹",
                    }}
                  />
                </Box>
                <Box mt={4}>
                  <Typography gutterBottom>
                    Select Duration ({duration} Years)
                  </Typography>
                  <Slider
                    value={duration}
                    onChange={(e, newValue) => setDuration(newValue)}
                    min={1}
                    max={30}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Box>
                <Box mt={4}>
                  <Typography gutterBottom>
                    Expected Rate of Return ({rate}%)
                  </Typography>
                  <Slider
                    value={rate}
                    onChange={(e, newValue) => setRate(newValue)}
                    min={8}
                    max={30}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  The total value of your SIP investment after {duration} Years
                  will be
                </Typography>
                <Typography variant="h3" color="primary" gutterBottom>
                  ₹ {sipTotalValue.toLocaleString()}
                </Typography>
                <PieChart width={300} height={300}>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
                <Box mt={4}>
                  <Button
                    variant="outlined"
                    style={{
                      color: "rgb(154 217 83)",
                      borderColor: "rgb(154 217 83)",
                      textTransform: "none",
                    }}
                    onClick={() => router.push("/open_account")}
                  >
                    Invest Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}

          {tabIndex === 1 && (
            <Grid container spacing={4} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Lumpsum Returns Estimator
                </Typography>
                <Box mt={2}>
                  <TextField
                    label="Enter Lumpsum Amount"
                    variant="outlined"
                    fullWidth
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    InputProps={{
                      startAdornment: "₹",
                    }}
                  />
                </Box>
                <Box mt={4}>
                  <Typography gutterBottom>
                    Select Duration ({duration} Years)
                  </Typography>
                  <Slider
                    value={duration}
                    onChange={(e, newValue) => setDuration(newValue)}
                    min={1}
                    max={30}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Box>
                <Box mt={4}>
                  <Typography gutterBottom>
                    Expected Rate of Return ({rate}%)
                  </Typography>
                  <Slider
                    value={rate}
                    onChange={(e, newValue) => setRate(newValue)}
                    min={8}
                    max={30}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  The total value of your Lumpsum investment after {duration}{" "}
                  Years will be
                </Typography>
                <Typography variant="h3" color="primary" gutterBottom>
                  ₹ {lumpsumTotalValue.toLocaleString()}
                </Typography>
                <PieChart width={300} height={300}>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
                <Box mt={4}>
                  <Button variant="contained" color="primary" fullWidth>
                    Invest Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}

          {tabIndex === 2 && (
            <Grid container spacing={4} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Advanced SIP Calculator
                </Typography>
                <Box mt={2}>
                  <TextField
                    label="Enter SIP Amount"
                    variant="outlined"
                    fullWidth
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    InputProps={{
                      startAdornment: "₹",
                    }}
                  />
                </Box>
                <Box mt={4}>
                  <Typography gutterBottom>
                    Select Duration ({duration} Years)
                  </Typography>
                  <Slider
                    value={duration}
                    onChange={(e, newValue) => setDuration(newValue)}
                    min={1}
                    max={30}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Box>
                <Box mt={4}>
                  <Typography gutterBottom>
                    Expected Rate of Return ({rate}%)
                  </Typography>
                  <Slider
                    value={rate}
                    onChange={(e, newValue) => setRate(newValue)}
                    min={8}
                    max={30}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Box>
                {/* Advanced SIP options can be added here */}
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  The total value of your investment after {duration} Years will
                  be
                </Typography>
                <Typography variant="h3" color="primary" gutterBottom>
                  ₹ {advancedSipTotalValue.toLocaleString()}
                </Typography>
                <PieChart width={300} height={300}>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
                <Box mt={4}>
                  <Button variant="contained" color="primary" fullWidth>
                    Invest Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
};

export default SIP;
