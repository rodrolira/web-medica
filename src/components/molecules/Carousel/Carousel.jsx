import { Carousel } from 'flowbite-react';

function CarouselGroup() {
    const customTheme = {
        scrollContainer: {
            base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none snap-x indiana-scroll-container indiana-scroll-container--hide-scrollbars',
        }
    };

    return (
        <div className="!p-0 pe-0 !m-0 w-[50%] h-[38rem] !rounded-none">
            <Carousel slideInterval={5000} theme={customTheme}>
                <img className="h-full !rounded-none" src="images/main/main-caulier.webp" alt="..." />
                <img className="h-full !rounded-none" src="images/main/main-vasquez.webp" alt="..." />
                <img className="h-full !rounded-none" src="images/main/main-vargas.webp" alt="..." />
            </Carousel>
        </div>
    );
}

export default CarouselGroup
