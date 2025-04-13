import axios from "axios";
import React from "react";

export const Razorpay = ({ hoardingId, amount, refreshList }) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCreateOrder = async () => {
    try {
      const order = await axios.post("http://localhost:3000/payment/create_order", {
        amount: amount,
        currency: "INR",
        receipt: `receipt_order_${hoardingId}`,
      });

      displayRazorpay(order.data);
    } catch (error) {
      console.error("Order creation failed:", error);
    }
  };

  const displayRazorpay = async (orderData) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: "rzp_test_1e3B7LfprfcpMf",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Ad Booking Platform",
      description: "Booking Payment",
      order_id: orderData.id,
      handler: async function (response) {
        try {
          const verifyRes = await axios.post("http://localhost:3000/payment/verify_order", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            hoardingId: hoardingId, // 👈 Send to backend
          });

          if (verifyRes.data.status === "success") {
            alert("Payment successful and verified!");
            refreshList(); // 👈 Refresh screen list
          } else {
            alert("Payment verification failed.");
          }
        } catch (err) {
          alert("Verification error");
          console.error(err);
        }
      },
      prefill: {
        name: "Bhavy Patel",
        email: "bhavy@gmail.com",
        contact: "9999999999",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button className="btn btn-danger" onClick={handleCreateOrder}>
      Pay Now
    </button>
  );
};


// import axios from "axios";
// import React, { useState } from "react";

// export const Razorpay = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const handleCreateOrder = async () => {
//     try {
//       const order = await axios.post(
//         "http://localhost:3000/payment/create_order",
//         {
//           amount: 500,
//           currency: "INR",
//           receipt: "receipt_order_123",
//         }
//       );

//       setOrderDetails(order.data);
//       displayRazorpay(order.data);
//     } catch (error) {
//       console.error("Order creation failed:", error);
//     }
//   };

//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const displayRazorpay = async (orderData) => {
//     const res = await loadScript(
//       "https://checkout.razorpay.com/v1/checkout.js"
//     );

//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const options = {
//       key: "rzp_test_1e3B7LfprfcpMf",
//       amount: orderData.amount,
//       currency: orderData.currency,
//       name: "Test Corp",
//       description: "Test Transaction",
//       order_id: orderData.id,
//       handler: async function (response) {
//         const res = await axios.post(
//           "http://localhost:3000/payment/verify_order",
//           {
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//           }
//         );

//         if (res.data.status === "success") {
//           alert("Payment verified successfully!");
//         } else {
//           alert("Payment verification failed.");
//         }
//       },
//       prefill: {
//         name: "bhavy patel",
//         email: "bhavy@gmail.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#61dafb",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };
//   return (
//     <div>
//       <button className="btn btn-danger"
//         onClick={handleCreateOrder}
//         sx={{ width: "100%", marginTop: "20px" }}
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// };