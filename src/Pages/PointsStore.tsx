import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import { useState, useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import QRCode from "qrcode.react"; // install with `npm install qrcode.react`
import { UserContext } from "../UserContext";
import axios from "axios";

// Define the type for your items
type Item = {
  image: string;
  title: string;
  price: number;
  description: string;
};

// Sample data
const data: Item[] = [
  {
    image: "/BahrainMu.jpg",
    title: "Bahrain National Museum",
    price: 100,
    description: "Offer: 10% off Tickets",
  },
  {
    image: "/cinema.jpg",
    title: "Cineco Cinema",
    price: 200,
    description: "Offer: 25% off Popcorn and Drinks",
  },
  {
    image: "/Circuit.jpg",
    title: "Bahrain International Circuit",
    price: 300,
    description: "Offer: 30% off on Karting",
  },
  {
    image: "/BahrainQala.jpg",
    title: "Qalat al-Bahrain",
    price: 150,
    description: "Offer: 50% Off on Entry Ticket",
  },
  {
    image: "/cityCenter.jpg",
    title: "Bahrain City Centre ",
    price: 250,
    description: "Offer: 5 BD gift Card at applicabile stores",
  },
  {
    image: "/paradise.jpg",
    title: "Delmon Paradise Waterpark",
    price: 220,
    description: "Offer: 50% off on Entry Ticket.",
  },
  {
    image: "/theater.jpg",
    title: "Bahrain National Theatre",
    price: 180,
    description: "Offer: 50% Off on Entry Ticket.",
  },
  {
    image: "/BahrainAradFort.jpg",
    title: "Arad Fort",
    price: 130,
    description: "Offer: Free Entry Ticket.",
  },
  // Add more items as needed
];

const PointsStore: React.FC = () => {
  const { user, refreshUser } = useContext(UserContext);
  // State for tracking quantities of each item
  const [quantities, setQuantities] = useState(Array(data.length).fill(0));
  // State for tracking the currently selected tab
  const [tabValue, setTabValue] = useState(0);
  // State for tracking purchased vouchers
  const [purchasedVouchers, setPurchasedVouchers] = useState<Item[]>([]);
  // State for tracking the currently selected voucher
  const [selectedVoucher, setSelectedVoucher] = useState<Item | null>(null);
  // State for managing the confirmation dialog
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  // State for the item being purchased
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  // Function for handling changes in item quantities

  // Function for handling tab changes
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  // Function for handling voucher purchases
  const handlePurchase = (index: number) => {
    if (user && user.points < data[index].price) {
      alert("Insufficient points");
      return;
    } else if (user && user.points >= data[index].price) {
      setCurrentItem(data[index]);
      setIsConfirmDialogOpen(true);
    } else {
      alert("Please login to purchase vouchers");
    }
  };

  // Function for confirming the purchase
  const confirmPurchase = () => {
    if (currentItem) {
      axios
        .post("/purchase", {
          userId: user.id,
          total: currentItem.price,
        })
        .then(() => {
          refreshUser();
          setPurchasedVouchers((prevVouchers) => [
            ...prevVouchers,
            currentItem,
          ]);
          setIsConfirmDialogOpen(false);
          setCurrentItem(null);
        });
    }
  };

  // Function for handling voucher selection
  const handleVoucherClick = (voucher: Item) => {
    setSelectedVoucher(voucher);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box sx={{ mb: 20, maxWidth: 1280, margin: "auto" }}>
        <NavBar textColor="rgb(0,0,0)" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100vh",
          margin: "auto",
        }}
      >
        <Container>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Store" />
            <Tab label="My Vouchers" />
          </Tabs>
          {tabValue === 0 && (
            <Box sx={{ flexGrow: 1, m: 2 }}>
              <Typography variant="h4" component="div" gutterBottom>
                Store
              </Typography>
              <Grid container spacing={2}>
                {data.map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                      sx={{
                        maxWidth: 512,
                        maxHeight: 512,
                        borderRadius: 4,
                        minHeight: 400,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt={item.title}
                      />
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            minHeight: 70,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            minHeight: 40,
                          }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {item.description}
                        </Typography>
                        {/* <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            minHeight: 40,
                          }}
                        >
                          <IconButton
                            onClick={() => handleQuantityChange(index, -1)}
                            disabled={quantities[index] <= 1}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{quantities[index]}</Typography>
                          <IconButton
                            onClick={() => handleQuantityChange(index, 1)}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box> */}
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            mt: 5,
                            backgroundColor: "#FEA832",
                            color: "#fff",
                            fontSize: "1rem",
                            fontFamily: "Roboto",
                            "&:hover": {
                              backgroundColor: "#FFC542",
                            },
                            borderRadius: 5,
                          }}
                          onClick={() => handlePurchase(index)}
                        >
                          {item.price} points
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {tabValue === 1 && (
            <Box sx={{ flexGrow: 1, m: 2 }}>
              {purchasedVouchers.length > 0 ? (
                purchasedVouchers.map((voucher, index) => (
                  <Card
                    sx={{ maxWidth: 512, maxHeight: 512, mb: 2 }}
                    key={index}
                    onClick={() => handleVoucherClick(voucher)}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {voucher.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {voucher.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 300,
                  }}
                  variant="h4"
                >
                  You have not purchased any vouchers yet.
                </Typography>
              )}
              {selectedVoucher && (
                <Dialog open onClose={() => setSelectedVoucher(null)}>
                  <DialogTitle>{selectedVoucher.title}</DialogTitle>
                  <DialogContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                    }}
                  >
                    <QRCode value={selectedVoucher.title} />
                  </DialogContent>
                </Dialog>
              )}
            </Box>
          )}
        </Container>
        <Box
          sx={{
            height: "auto",
            width: "100%",
          }}
        >
          <Footer />
        </Box>
      </Box>
      <Dialog
        open={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
      >
        <DialogTitle>Confirm Purchase</DialogTitle>
        <DialogContent>
          {currentItem && (
            <Typography>
              Are you sure you want to purchase "{currentItem.title}" ticket for{" "}
              {currentItem.price} points?
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              fontFamily: "Roboto",
              fontSize: "1rem",
              backgroundColor: "#205E60",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#16473C",
              },
            }}
            onClick={confirmPurchase}
            color="primary"
          >
            Confirm
          </Button>
          <Button
            onClick={() => setIsConfirmDialogOpen(false)}
            sx={{
              fontFamily: "Roboto",
              fontSize: "1rem",
              backgroundColor: "#FEA832",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#FFC542",
              },
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PointsStore;
