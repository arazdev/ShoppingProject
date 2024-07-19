import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className='main-page'>
            <div className='main-page-content'>
                <h1>Beauty Care</h1>
                <p>The Beauty Shopping Project is an innovative platform designed to revolutionize the online beauty shopping experience. It focuses on providing users with a seamless and interactive interface that allows them to easily browse, select, and purchase beauty products. Featuring a dynamic cart system, users can view their added items in a neatly organized table displaying both the name and price of each product. This project eliminates the need for complex navigation by offering a straightforward approach where users can access their cart instantly with a single click. By integrating user-friendly functionalities and an efficient checkout process, the Beauty Shopping Project aims to enhance user satisfaction and streamline the online beauty shopping journey.
                </p>
                <button onClick={() => navigate('/product-listing')}>Get Started</button>
            </div>
        </div>
    );
};

export default LandingPage;