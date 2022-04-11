function MessagesApp(props) {
  return (
    <div className="message-app">
      <Nav />
      <div className="my-messages-container">
        {messages.map((item) => {
          return <h3 className="message">{item}</h3>;
        })}
      </div>
      <div className="their-messages-container">
        <h3>tambem tou</h3>
        <h3>Lorem, ipsum dolor.</h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime
          fugit aspernatur unde facere consequuntur quasi ducimus sed ipsam
          aliquam, enim architecto officiis obcaecati quod molestiae reiciendis
          incidunt porro labore.
        </h3>
      </div>
      <Footer messages={messages} setMessages={setMessages} />
      <div className="login-comtainer">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>log in</button>
      </div>
    </div>
  );
}

export default MessagesApp;
