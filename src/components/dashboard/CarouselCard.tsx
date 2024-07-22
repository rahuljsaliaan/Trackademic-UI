import React, { useState } from 'react';
import styled from 'styled-components';

const prevArrowSrc = 'src/assets/icons/arrow-left.svg'; 
const nextArrowSrc = 'src/assets/icons/arrow-right.svg'; 

interface CarouselCardProps {
  content: JSX.Element[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === content.length - 1;

  const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const CarouselControls = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `;

  const ArrowButton = styled.button<{ right?: boolean; disabled?: boolean }>`
    background: transparent;
    padding: 0;
    border: none;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    z-index: 1;
    ${(props) => (props.right ? 'right: 10px;' : 'left: 10px;')}
    
    img {
      width: 15px;
      height: 15px;
      filter: ${(props) => props.disabled ? 'grayscale(100%)' : 'none'};
    }

    &:hover {
      opacity: ${(props) => (props.disabled ? '0.5' : '1')};
    }
  `;

  const ContentArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
  `;

  const Dot = styled.div<{ active?: boolean }>`
    width: 10px;
    height: 10px;
    background: ${(props) => (props.active ? '#4535EA' : '#D8DEE7')};
    border-radius: 50%;
    margin: 0 4px;
    cursor: pointer;
  `;

  return (
        <CarouselContainer>
            <CarouselControls>
                <ArrowButton onClick={handlePrev} disabled={isPrevDisabled}>
                    <img src={prevArrowSrc} alt="Previous" />
                </ArrowButton>
                <ContentArea>
                    {content[currentIndex]}
                </ContentArea>
                <ArrowButton onClick={handleNext} right disabled={isNextDisabled}>
                    <img src={nextArrowSrc} alt="Next" />
                </ArrowButton>
            </CarouselControls>
            <Pagination>
                {content.map((_, index) => (
                    <Dot
                    key={index}
                    active={index === currentIndex}
                    onClick={() => handleDotClick(index)}
                    />
                ))}
            </Pagination>
        </CarouselContainer>
  );
};

export default CarouselCard;
