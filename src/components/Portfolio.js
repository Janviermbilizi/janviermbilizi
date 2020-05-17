import React from "react";

function Portfolia() {
  return (
    <div className="row my-auto justify-content-md-center">
      <div className="col-md-9" id="container2">
        <h1 className="title">Portfolia</h1>
        <br />
        <div className="row justify-content-center">
          {/* code quiz */}
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenterQuiz"
            >
              <img src={require("../components/images/codeQuiz.png")} alt="" />
              <div className="pftitle">Code Quiz</div>
            </button>
            <div
              className="modal fade"
              id="modalCenterQuiz"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Code Quiz
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://janviermbilizi.github.io/Code_Quiz"
                      target="_blank"
                    >
                      <h4>Deployed App</h4>
                    </a>
                    <br />
                    <a
                      href="https://github.com/Janviermbilizi/Code_Quiz"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Weather-Dashboard */}
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenterWeather"
            >
              <img
                src={require("../components/images/weatherDashbord.png")}
                alt=""
              />
              <div className="pftitle">Weather Dashboard</div>
            </button>
            <div
              className="modal fade"
              id="modalCenterWeather"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Weather Dashboard
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://janviermbilizi.github.io/Weather-Dashboard/"
                      target="_blank"
                    >
                      <h4>Deployed App</h4>
                    </a>
                    <br />
                    <a
                      href="https://github.com/Janviermbilizi/Weather-Dashboard"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Traveler */}
          <div className="pf">
            {/*  <a href="https://github.com/cwright489/Project1" target="_blank"><img src="/public/assets/images/traveler.jpg"
                alt="" />
              <div class="pftitle">
                Traveler
              </div>
            </a> */}
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenterTraveler"
            >
              <img src={require("../components/images/traveler.jpg")} alt="" />
              
              <div className="pftitle">Traveler</div>
            </button>
            <div
              className="modal fade"
              id="modalCenterTraveler"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Traveler
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {/* <a href="https://note-taker-site.herokuapp.com/" target="_blank">
                      <h4>Live web page</h4>
                    </a>
                    <br> */}
                    <a
                      href="https://github.com/cwright489/Project1"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="pf">
            <a href="https://github.com/Janviermbilizi/Team-Profile-Generator" target="_blank"><img
                src="/public/assets/images/Tpg.png" alt="" />
              <div class="pftitle">
                Team Profil Generator
              </div>
            </a>
          </div> */}

          {/* Note_Taker */}
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenterNote"
            >
              <img src={require("../components/images/noteTaker.png")} alt="" />
              <div className="pftitle">Note Taker</div>
            </button>
            <div
              className="modal fade"
              id="modalCenterNote"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Note Taker
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://note-taker-site.herokuapp.com/"
                      target="_blank"
                    >
                      <h4>Deployed App</h4>
                    </a>
                    <br />
                    <a
                      href="https://github.com/Janviermbilizi/Note_Taker"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Burger App */}
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenter"
            >
              <img src={require("../components/images/burgerApp.png")} alt="" />
              <div className="pftitle">Burger App</div>
            </button>
            <div
              className="modal fade"
              id="modalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Burger App
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://eat-da-burger-site.herokuapp.com/"
                      target="_blank"
                    >
                      <h4>Deployed App</h4>
                    </a>
                    <br />
                    <a
                      href="https://github.com/Janviermbilizi/Eat-Da-Burger"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Metabook */}
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <img src={require("../components/images/Metabook.png")} alt="" />
              <div className="pftitle">Metabook</div>
            </button>
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Metabook
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://cryptic-sea-06963.herokuapp.com/"
                      target="_blank"
                    >
                      <h4>Deployed App</h4>
                    </a>
                    <br />
                    <a
                      href="https://github.com/cwright489/Project2"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolia;
