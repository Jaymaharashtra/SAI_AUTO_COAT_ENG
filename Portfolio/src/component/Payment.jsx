import React from "react";

const Payment = () =>{
    return(
        <div className="payment-container">
      <h2 className="payment-title">Payment Details</h2>

      <div className="payment-card">
        <div className="payment-row">
          <span className="label">Account Holder Name</span>
          <span className="colon">:</span>
          <span className="value">M/s Sai Auto Coat Engineers</span>
        </div>

        <div className="payment-row">
          <span className="label">Bank Name</span>
          <span className="colon">:</span>
          <span className="value">Lala Urban Co.Opp Bank Ltd.</span>
        </div>

        <div className="payment-row">
          <span className="label">Account Number</span>
          <span className="colon">:</span>
          <span className="value">005002100001264</span>
        </div>

        <div className="payment-row">
          <span className="label">Account Type</span>
          <span className="colon">:</span>
          <span className="value">Current Account</span>
        </div>

        <div className="payment-row">
          <span className="label">IFSC Code</span>
          <span className="colon">:</span>
          <span className="value">HDFC0CLALAB</span>
        </div>

        <div className="payment-row">
          <span className="label">GST No</span>
          <span className="colon">:</span>
          <span className="value">27ADXPH5584QIZB</span>
        </div>

        <div className="payment-row">
          <span className="label">PAN No</span>
          <span className="colon">:</span>
          <span className="value">ADXPH5584Q</span>
        </div>
      </div>
    </div>
    );
}

export default Payment;