export default function Main({ className = '', children, ...props }) {
  return <main id="main-content" tabIndex="-1" className={className || undefined} {...props}>{children}</main>
}