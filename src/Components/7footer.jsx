
function Footer(props) {
  return (
    <div>
      <footer>
        <div class="center">
        {props.text[props.language].footer}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
