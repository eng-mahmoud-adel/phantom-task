import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BaseButton from '../../button/Button';
import './LicenseCard.css';

function LicenseCard() {
    return(
        <Card className="license-card text-white">
            <small className="text-muted">License key</small>

            <Row>
                <Col md={10}>
                    <p>xxxx - xxxx - xxxx - xxxx</p>
                </Col>

                <Col md={2}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="14" cy="14" r="14" fill="#1EC1C3"/>
                        <g clipPath="url(#clip0)">
                        <path d="M21.9019 20.9599L7.0399 6.09786C6.90968 5.9677 6.69868 5.9677 6.56846 6.09786L6.09718 6.56918C5.96696 6.69933 5.96696 6.9104 6.09718 7.04059L8.85366 9.7971C7.53753 10.8386 6.54259 12.2584 6.01543 13.8984C5.99427 13.9645 5.99427 14.0361 6.01543 14.1022C7.14921 17.6302 10.3579 20.0003 13.9995 20.0003C15.4239 20.0003 16.7936 19.6394 18.0166 18.9601L20.9592 21.9026C21.0894 22.0328 21.3004 22.0328 21.4306 21.9026L21.9019 21.4313C22.0321 21.3011 22.0321 21.0901 21.9019 20.9599ZM13.9995 18.667C11.4263 18.667 9.33285 16.5735 9.33285 14.0003C9.33285 12.9873 9.66595 12.0102 10.266 11.2094L11.7152 12.6586C11.4753 13.0613 11.3329 13.5163 11.3329 14.0003C11.3329 15.4706 12.5292 16.6669 13.9995 16.6669C14.4835 16.6669 14.9385 16.5245 15.3412 16.2846L16.7904 17.7338C15.9895 18.3339 15.0125 18.667 13.9995 18.667Z" fill="#1EC1C3"/>
                        <path d="M13.7184 11.54C13.666 11.6647 13.6943 11.8093 13.79 11.9049L16.0947 14.2096C16.1585 14.2735 16.2438 14.3073 16.3304 14.3073C16.374 14.3073 16.418 14.2988 16.4596 14.2813C16.5846 14.2285 16.6653 14.1058 16.6637 13.9701C16.6471 12.5094 15.4902 11.3526 14.0296 11.3359C13.8968 11.3503 13.7711 11.415 13.7184 11.54Z" fill="#1EC1C3"/>
                        <path d="M11.6126 9.72757C11.7125 9.82782 11.8652 9.85323 11.9921 9.79267C12.6289 9.48798 13.3043 9.33335 13.9997 9.33335C16.5729 9.33335 18.6663 11.4268 18.6663 14C18.6663 14.6954 18.5117 15.3708 18.207 16.0075C18.1461 16.1351 18.1722 16.2872 18.2721 16.3871L19.4274 17.5424C19.4899 17.6049 19.5745 17.6401 19.6631 17.6401C19.6634 17.6401 19.6637 17.6401 19.6637 17.6401C19.7526 17.6397 19.8376 17.6042 19.9001 17.5414C20.8474 16.5847 21.5681 15.3953 21.9838 14.1019C22.0049 14.0358 22.0049 13.9643 21.9838 13.8982C20.85 10.3701 17.6413 8 13.9997 8C13.0003 8 12.0182 8.17772 11.0804 8.52866C10.9742 8.56838 10.8954 8.65919 10.8714 8.77019C10.8473 8.88088 10.8814 8.99644 10.9615 9.07651L11.6126 9.72757Z" fill="#1EC1C3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="16" height="16" fill="white" transform="translate(6 6)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </Col>
            </Row>
            
            <Row>
                <Col md={7}>
                    <BaseButton text="Renew Now" style={{backgroundColor: '#01A9F4', border: '1px solid #01A9F4'}} />
                </Col>

                <Col md={5}>
                    <BaseButton text="Deactive" style={{color: '#EC4165'}} />
                </Col>
            </Row>

            <small className="mt-2"><span className="text-muted">Next Renewal on</span> 22 Mar 2021</small>
        </Card>
    )
}

export default LicenseCard;