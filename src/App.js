import React from 'react';
import './App.css';
import 'react-bootstrap-accordion/dist/index.css';
import { Accordion } from 'react-bootstrap-accordion';
import HorizontolScroll from './components/HorizontalScroll';
import DragDropFile from './components/DragDrop/DragDrop';
import CustomInput from './components/CustomInput/CustomInput';

function App() {
  return (
    <div className="parent">
      <div className="container">
        <h1 className="main-heading">Email Outreach</h1>

        <div className="goal">
          <p style={{ color: '#B0B0B0' }}>Goal</p>
          <p style={{ fontSize: '19px' }}>Setup Email Outreach</p>
        </div>

        <div className="action-container">
          <Accordion
            show
            title={
              <div className="action">
                <p style={{ color: '#B0B0B0' }}>Action</p>
                <p style={{ fontSize: '19px' }}>Do this: Send an email</p>
              </div>
            }
          >
            <div>
              <p style={{ fontSize: '19px' }}>Create a script</p>
              <p style={{ color: '#838383', marginTop: '10px' }}>
                Use the template below to create your message.
              </p>
              <div style={{ position: 'relative', margin: '50px 0' }}>
                <HorizontolScroll />
              </div>
            </div>
            <div className="sender-detail">
              <h3 style={{ fontWeight: 300, marginBottom: '20px' }}>
                Sender Details
              </h3>
              <div className="details">
                <div>
                  <p style={{ fontWeight: 'bold', color: '#949494' }}>
                    From name: <span style={{ color: 'black' }}>ALBIS</span>
                  </p>
                  <p style={{ fontWeight: 'bold', color: '#949494' }}>
                    Reply-to email:{' '}
                    <span style={{ color: 'black' }}>hello@albisae.com</span>
                  </p>
                </div>
                <button>Edit</button>
              </div>
            </div>
          </Accordion>
        </div>

        <div className="assets-container">
          <Accordion
            show
            title={
              <div className="asset">
                <p style={{ color: '#B0B0B0' }}>Assets</p>
                <p style={{ fontSize: '19px' }}>Attach file(s) (optional)</p>
              </div>
            }
          >
            <div>
              <p style={{ fontSize: '14px', color: '#838383' }}>
                Upload list of prospects
              </p>
              <div>
                <DragDropFile />
              </div>
            </div>
          </Accordion>
        </div>

        <div>
          <Accordion
            show
            title={
              <div className="timing">
                <p>Timing</p>
                <p>
                  Scheduled: <span> Immidiately after trigger</span>
                </p>
                <p>
                  Frequency: <span> Don't limit (Trigger every time)</span>
                </p>
              </div>
            }
          >
            <CustomInput
              label={'Choose a time to start this action'}
              optionText={'Immidiately'}
            />
            <CustomInput
              label={'Limit frequency to:'}
              optionText={'100 per day'}
            />
          </Accordion>
        </div>
        <button className="activate">Activate</button>
      </div>
    </div>
  );
}

export default App;
