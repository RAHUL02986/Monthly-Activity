import React from "react";

class Activity extends React.Component {
  render() {
    return (
      <>
        <div className="flex container">
          <div className="month"
            
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2 >
              {this.props.details.name}
            </h2>

            <p
              style={{
                background: "orange",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              {this.props.month}
            </p>
          </div>
          <div className="moth-d">
            {this.props.details.days.map((day) => {
              return (
                <button
                  onClick={() => {
                    this.props.handleToggle(day.id, this.props.details.name);
                  }}
                  className={
                    day.isDone
                      ? "has-background-primary"
                      : "day"
                  }
                >
                  {day.id}
                </button>
              );
            })}
          </div>
          <button
            name="delete"
            onClick={(e) => {
              this.props.handleDelete(e, this.props.index);
            }}
            className="delete"
          >X</button>
        </div>
      </>
    );
  }
}

export default Activity;