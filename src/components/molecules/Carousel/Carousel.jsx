import { Carousel } from 'flowbite-react';

function CarouselGroup() {
    return (
        <div className="!p-0 pe-0 !m-0 w-[50%] h-[38rem]">
            <Carousel slideInterval={5000}>
                <img className="h-full !rounded-none" src="images/main/main-caulier.webp" alt="..." />
                <img className="h-full !rounded-none" src="images/main/main-vasquez.webp" alt="..." />
                <img className="h-full !rounded-none" src="images/main/main-vargas.webp" alt="..." />
            </Carousel>
        </div>
    );
}

export default CarouselGroup
