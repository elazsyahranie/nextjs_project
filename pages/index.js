import { useEffect, useState } from "react";
import axiosApiIntances from "../utils/axios";
import Layout from "../components/Layout";
import Navbar from "../components/module/Navbar";
import styles from "../styles/index.module.css";
import { authPage } from "../middleware/authorizationPage";
import Footer from "../components/module/Footer";

// Proses getData dilakukan di server
export async function getServerSideProps(context) {
  const data = await authPage(context); // Untuk halaman yang harus login dulu (katanya)
  console.log(data);
  const res = await axiosApiIntances
    .get("users")
    .then((res) => {
      console.log(res.data);
      return res.data; // return kalau hanya satu baris
    })
    .catch((err) => {
      console.log(err);
      return [];
    });

  // Menjembatani 'getServerSideProps' dan....
  return {
    props: { users: res, userLogin: data }, // will be passed to the page component as props
  };
}

// Data yang dilempar akan masuk ke props
export default function Home(props) {
  console.log(props);
  const [users, setUser] = useState(props.users);

  return (
    <>
      <Layout title="Home">
        <div className={`${styles.whiteBackground}`}>
          <Navbar />
        </div>
        <div className={`container py-5`}>
          <div className={`row justify-content-between`}>
            <div
              className={`${styles.whiteBackgroundWithBorderRadius} col-lg-3 col-md-3 col-sm-3 col-xs-12  ${styles.homeContentMinHeight}`}
            >
              <div className="row py-5 px-4 w-100">
                <div>
                  <img src="/homeOrIndex/grid.png"></img>
                  <span className="ms-5">Dashboard</span>
                </div>
              </div>
              <div className="row pb-5 px-4 w-100">
                <div>
                  <img src="/homeOrIndex/arrow-up.png"></img>
                  <span className="ms-5">Transfer</span>
                </div>
              </div>
              <div className="row pb-5 px-4 w-100">
                <div>
                  <img src="/homeOrIndex/plus.png"></img>
                  <span className="ms-5">Top Up</span>
                </div>
              </div>
              <div className="row pb-5 px-4 w-100">
                <div>
                  <img src="/homeOrIndex/group40.png"></img>
                  <span className="ms-5">Profile</span>
                </div>
              </div>
            </div>
            <div className={`col-lg-9 col-md-9 col-sm-9 col-xs-12`}>
              <div className={`${styles.blueBackgroundWithBorderRadius}`}>
                <div className="row justify-content-between p-4">
                  <div
                    className={`col-lg-5 col-md-5 col-sm-5 col-xs-5 ${styles.whiteText}`}
                  >
                    <span className="d-block">Balance</span>
                    <h2>Rp. 120,000</h2>
                    <span className="d-block">+62 813-9387-7946</span>
                  </div>
                  <div
                    className={`col-lg-3 col-md-3 col-sm-3 col-xs-3 d-flex align-content-between flex-wrap ${styles.whiteText} ${styles.whiteText}`}
                  >
                    <button
                      type="submit"
                      className={`btn ${styles.myTransparentButton} d-block`}
                    >
                      Transfer
                    </button>
                    <button
                      type="submit"
                      className={`btn ${styles.myTransparentButton} d-block`}
                    >
                      Top Up
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className={`col-lg-7 col-md-7 col-sm-7 col-xs-7 p-4 `}>
                  <div
                    className={`row p-4 ${styles.whiteBackgroundWithBorderRadius}`}
                  >
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <img src="/homeOrIndex/in2.png"></img>
                      <span className="d-block">Income</span>
                      <h5>Rp. 2.120.000</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <img src="/homeOrIndex/out2.png"></img>
                      <span className="d-block ">Expense</span>
                      <h5>Rp. 1.560.000</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-4 p-4">
                  <div
                    className={`row px-2 py-4 ${styles.whiteBackgroundWithBorderRadius}`}
                  >
                    <div className="d-flex justify-content-between h-100">
                      <img src="/homeOrIndex/1.png"></img>
                      <div className="row px-2">
                        <span className="fw-bold d-block">Samuel Sushi</span>
                        <span className="d-block">Transfer</span>
                      </div>
                      <span className="d-block my-auto">+Rp.50.000</span>
                    </div>
                    <div className="d-flex justify-content-between pt-4 h-100">
                      <img src="/homeOrIndex/history-dashboard.png"></img>
                      <div className="row px-2">
                        <span className="fw-bold d-block">Netflix</span>
                        <span className="d-block">Subscription</span>
                      </div>
                      <span className="d-block my-auto">-Rp.149.000</span>
                    </div>
                    <div className="d-flex justify-content-between pt-4 h-100">
                      <img src="/homeOrIndex/rectangle33.png"></img>
                      <div className="row px-2">
                        <span className="fw-bold d-block">Christine</span>
                        <span className="d-block">Transfer</span>
                      </div>
                      <span className="d-block my-auto">-Rp.150.000</span>
                    </div>
                    <div className="d-flex justify-content-between pt-4 h-100">
                      <img src="/homeOrIndex/adobe_icon.png"></img>
                      <div className="row px-2">
                        <span className="fw-bold d-block">Adobe Inc</span>
                        <span className="d-block">Subscription</span>
                      </div>
                      <span className="d-block my-auto">-Rp.249.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.theFooter}`}>
          <Footer />
        </div>
      </Layout>
    </>
  );
}