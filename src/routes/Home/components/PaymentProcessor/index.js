import React from "react";
import * as css from "./PaymentProcessor.scss";
import { Modal } from "react-bootstrap";

export const PaymentProcessor = ({toggleModal, paymentSuccessful, makePayment}) => {
    return (
        <div>
            <Modal show>
                <Modal.Header closeButton onHide={()=>toggleModal()}>
                    <h1>{ paymentSuccessful && "Thank You !" || "Make Your Payment" }</h1>
                </Modal.Header>
                <Modal.Body>
                    { paymentSuccessful &&
                        <h4>Payment Successful</h4>
                        ||
                    <div className="row">
                      <form className="form-horizontal" role="form">
                        <fieldset>
                          <div className="form-group">
                            <label className="col-sm-3 control-label" >Name on Card</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="card-holder-name" id="card-holder-name" placeholder="Card Holder's Name" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-3 control-label">Card Number</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="card-number" id="card-number" placeholder="Debit/Credit Card Number" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-3 control-label" >Expiration Date</label>
                            <div className="col-sm-9">
                              <div className="row">
                                <div className="col-xs-3">
                                  <select className="form-control col-sm-2" name="expiry-month" id="expiry-month">
                                    <option>Month</option>
                                    <option value="01">Jan (01)</option>
                                    <option value="02">Feb (02)</option>
                                    <option value="03">Mar (03)</option>
                                    <option value="04">Apr (04)</option>
                                    <option value="05">May (05)</option>
                                    <option value="06">June (06)</option>
                                    <option value="07">July (07)</option>
                                    <option value="08">Aug (08)</option>
                                    <option value="09">Sep (09)</option>
                                    <option value="10">Oct (10)</option>
                                    <option value="11">Nov (11)</option>
                                    <option value="12">Dec (12)</option>
                                  </select>
                                </div>
                                <div className="col-xs-3">
                                  <select className="form-control" name="expiry-year">
                                    <option value="17">2017</option>
                                    <option value="18">2018</option>
                                    <option value="19">2019</option>
                                    <option value="20">2020</option>
                                    <option value="21">2021</option>
                                    <option value="22">2022</option>
                                    <option value="23">2023</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-3 control-label">Card CVV</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control" name="cvv" id="cvv" placeholder="Security Code"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-9">
                              <button type="button" className="btn btn-success" onClick={makePayment}>Pay Now</button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                }
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default PaymentProcessor;
