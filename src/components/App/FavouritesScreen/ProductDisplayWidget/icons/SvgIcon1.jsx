function SvgIcon1({ className, htmlContent1 }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: htmlContent1 }} />;
}

export default SvgIcon1;
