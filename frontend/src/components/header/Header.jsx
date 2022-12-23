import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTittles">
        <span className="headerTittleSm">React & Node</span>
        <span className="headerTittleLg">Blog</span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
