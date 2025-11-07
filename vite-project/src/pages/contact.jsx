const Contact = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/about">Over Ons</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <Outlet />
    </>
  );
};

export default Contact;