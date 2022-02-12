import './Loader.css';

export default function Loader() {
  return (
    <div className="row">
      <div className="col-sm-2">
        <div id="bars1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h5>Loading...</h5>
      </div>
    </div>
  );
}
