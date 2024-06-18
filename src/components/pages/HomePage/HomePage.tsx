import { product } from '../../../data/product';

import { Card } from '../../elements/Card';
import { Content } from '../../elements/Content';
import { Img } from '../../elements/Img';

export const HomePage = () => {
    const { img, content } = product;

    return (
        <Card>
            <Img img={img} />
            <Content content={content} />
        </Card>
    );
};
