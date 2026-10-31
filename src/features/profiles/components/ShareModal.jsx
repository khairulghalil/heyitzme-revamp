import Offcanvas from "react-bootstrap/Offcanvas";
import { QRCodeSVG } from "qrcode.react";
import { useToast } from "../../../components";
import { copyToClipboard } from "../../../utils";
import * as logo from "../../../assets/img/logo";

function ShareModal({ profileUrl }) {
  const { showToast } = useToast();
  const handleCopyLink = async () => {
    const copied = await copyToClipboard(profileUrl);

    if (copied) {
      showToast("Link copied", "success");
    }
  };

  return (
    <Offcanvas.Body className="share-body text-center">
      <div className="share-title d-flex flex-column align-items-center">
        <span>Your Digital Identity</span>
        <h2>Meet. Scan.</h2>
        <h2>Stay Connected</h2>
        <p>Let's someone scan the code to instantly open your profile</p>
      </div>
      <QRCodeSVG
        id="qrcode"
        value={profileUrl}
        size={290}
        imageSettings={{
          src: logo.icon,
          height: 40,
          width: 40,
          excavate: true,
        }}
      />
      <div className="share-footer d-flex flex-column align-items-center">
        <div className="row w-100 px-1">
          <div className="col-8 p-0 d-flex flex-column align-items-start justify-content-center">
            <p className="profile-link-label">Profile Link</p>
            <span id="profile-url">{profileUrl}</span>
          </div>
          <div className="col-4 p-0 d-flex align-items-center justify-content-end">
            <button
              className="btn btn-primary share profile-theme"
              onClick={() => handleCopyLink()}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </Offcanvas.Body>
  );
}

export default ShareModal;
