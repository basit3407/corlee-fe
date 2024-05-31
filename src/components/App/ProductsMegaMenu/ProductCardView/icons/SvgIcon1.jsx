function SvgIcon1({ className, renderSvgOrText }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: renderSvgOrText }} />;
}

export default SvgIcon1;
