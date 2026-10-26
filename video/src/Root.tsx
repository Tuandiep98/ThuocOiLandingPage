import { Composition } from 'remotion';
import { Promo, DURATION } from './Promo';
import { Og, type OgProps } from './Og';

export const Root = () => (
  <>
    <Composition id="Promo" component={Promo} durationInFrames={DURATION} fps={30} width={1080} height={1350} />
    <Composition
      id="Og"
      component={Og}
      durationInFrames={1}
      fps={30}
      width={1200}
      height={630}
      defaultProps={{ eyebrow: 'Ứng dụng nhắc uống thuốc', title: 'Một tấm ảnh đơn thuốc, cả nhà biết khi nào uống thuốc', screen: 'home' } satisfies OgProps}
    />
  </>
);
