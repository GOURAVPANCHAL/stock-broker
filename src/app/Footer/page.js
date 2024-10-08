"use client";
import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import Link from "next/link"; // Correct import for Link
import { useRouter } from "next/navigation";
import './footer.css';

const Footer = () => {
  const router = useRouter();

  return (
    <Box mt={2} sx={{ backgroundColor: '#1C2534' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            sx={{ display: { xs: "none", md: "block", sm: "block" } }}
            item
            xs={12}
            md={3}
          >
            <Typography color="rgb(154, 217, 83)" fontSize="20px" fontWeight="500">
              NXTGEN <span style={{ color: 'white' }}>broker</span>
            </Typography>
            <Typography fontSize="18px" color="#9A9A9A">
              Made around the world.
            </Typography>
          </Grid>
          <Grid
            sx={{ display: { xs: "block", md: "none", sm: "none" } }}
            item
            xs={12}
            md={3}
          >
            <Typography fontSize="28px" fontWeight="600">
            <Typography color="rgb(154, 217, 83)" fontSize="20px" fontWeight="500">
              NXTGEN <span style={{ color: 'white' }}>broker</span>
            </Typography>
            </Typography>
            <Typography mt={1} mb={4} fontSize="16px" color="#9A9A9A">
              Made around the world.
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              fontSize="20px"
              fontWeight="600"
              color="white"
              mb={3}
            >
              Company
            </Typography>
            <ul className="footerul">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/service">Services</Link></li>
              <li><Link href="/sip">SIP</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              fontSize="20px"
              fontWeight="600"
              color="white"
              mb={3}
            >
              Services
            </Typography>
            <ul className="footerul">
              <li><Link href="/trade">Trade & Invest</Link></li>
              <li><Link href="/mutualfunds">Mutual Funds & SIP</Link></li>
              <li><Link href="/insurance">Insurance</Link></li>
            </ul>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography mb={3} fontSize="19px" fontWeight="600" color="white">
              Subscribe to our newsletter.
            </Typography>
            <Typography mb={2} fontSize="16px" color="white" lineHeight="2">
              Want to stay up to date with news and updates about our product? Subscribe.
            </Typography>
          </Grid>
        </Grid>
        <hr style={{ marginTop: "2rem", marginBottom: "2rem" }} />
      </Container>

      <Container sx={{ paddingBottom: "1rem", color: 'white' }}>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item md={11} xs={12}>
            <Typography fontSize="16px" color="white">
              © Copyright 2024, <span style={{ color: "rgb(154, 217, 83)" }}>NXTGEN BROKER</span>. Designed by <a href="https://www.digiindiasolutions.com/" target="_blank" style={{ cursor: 'pointer', color: 'rgb(154, 217, 83)' }}>DIGI India Solutions</a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{ color: "white" }} />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ color: "white" }} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: "white" }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
