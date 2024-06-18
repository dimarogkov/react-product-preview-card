import { ProdContent } from '../../../types/ProdContent';
import { Label, Title, Text, Btn } from '../../ui';
import { Price } from '../Price';

type Props = {
    content: ProdContent;
};

export const Content: React.FC<Props> = ({ content }) => {
    const { label, title, text, price } = content;

    return (
        <div className='relative w-full md:w-[50%] p-[20px] sm:p-[24px] md:p-[32px]'>
            <Label className='mb-[16px] sm:mb-[20px] md:mb-[24px] last:mb-0'>{label}</Label>
            <Title className='md:max-w-[90%] mb-[16px] sm:mb-[20px] md:mb-[28px] last:mb-0'>{title}</Title>
            <Text className='md:max-w-[90%] mb-[16px] sm:mb-[20px] md:mb-[28px] last:mb-0'>{text}</Text>
            <Price price={price} className='mb-[16px] sm:mb-[20px] md:mb-[24px] last:mb-0' />
            <Btn>Add to Cart</Btn>
        </div>
    );
};
