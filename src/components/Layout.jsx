import PropTypes from "prop-types";

const Layout = ({ children}) =>{
  return(
    <div className="Padre">
      <header className="hijo1">Header</header>
      {children}
      <footer className="hijo9">Footer</footer>
    </div>
  )
}
Layout.propTypes ={
  children: PropTypes.node.isRequired
}

export default Layout