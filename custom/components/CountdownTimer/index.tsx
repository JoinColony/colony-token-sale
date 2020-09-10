import React from "react"
import styled from "styled-components"
import Countdown from 'react-countdown'

const CountdownStyles = styled.div`
    color: #ffffff;
    text-align: center;
    margin: 20px 0 50px 0;

    .countdown-cta {
      font-size: 24px;
      font-weight: 700;
      flex-grow: 1;
      margin: 0 0 40px 0;
    }

    .countdown-items-wrapper {
      display: flex;
    }

    .countdown-items {
      flex-grow: 0;
      width: 80px;
    }

    .countdown-number {
      font-size: 36px;
      margin: 0 0 25px 0;
    }

    .countdown-text {
      font-size: 14px;
      margin: 0;
    }
`

const CountdownTimer: React.FC = () => {
  const timeStamp = CONFIG.countTimestamp || 0;
  return timeStamp ? (
    <div>
      <Countdown
        date={timeStamp}
        zeroPadDays={1}
        zeroPadTime={2}
        renderer={({ formatted: { days, hours, minutes, seconds }}) => (
          <CountdownStyles>
            <p className="countdown-cta">Public Sale starts in</p>
            <div className="countdown-items-wrapper">
              <div className="countdown-items">
                <p className="countdown-number">{days}</p>
                <span className="countdown-text">Days</span>
              </div>
              <div className="countdown-items">
                <p className="countdown-number">{hours}</p>
                <span className="countdown-text">Hours</span>
              </div>
              <div className="countdown-items">
                <p className="countdown-number">{minutes}</p>
                <span className="countdown-text">Minutes</span>
              </div>
              <div className="countdown-items">
                <p className="countdown-number">{seconds}</p>
                <span className="countdown-text">Seconds</span>
              </div>
            </div>
          </CountdownStyles>
        )}
      />
    </div>
  ) : null;
}

export default CountdownTimer;
