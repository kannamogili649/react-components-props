const Notification = (props) => {
  const { className, url, content } = props;
  return (
    <div className={className}>
      <img className="icon" src={url}></img>
      <p className="para">{content}</p>
    </div>
  );
};

const element = (
  <div className="main-div">
    <h1 className="heading">Notifications</h1>
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      content="Information Message"
      className="div-content1"
    />
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      content="Success Message"
      className="div-content2"
    />
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      content="Information Message"
      className="div-content div1"
    />
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      content="Information Message"
      className="div-content div1"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
