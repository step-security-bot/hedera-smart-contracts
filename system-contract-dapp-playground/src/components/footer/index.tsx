import { HmotionFooter } from '@/libs/framer-motion/motions';
import { HEDERA_SOCIAL_MEDIA } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <HmotionFooter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.6,
        duration: 0.6,
      }}
      className="text-white px-6 w-full z-50 sm:px-16 md:px-24"
    >
      <div
        className="w-full flex flex-col gap-6 border-t-[1px] border-white/30 py-3
                  md:flex-row md:justify-between md:items-center md:pt-9 md:pb-6"
      >
        {/* Logo & copyright*/}
        <div className="flex flex-col gap-1 justify-center items-center md:items-start">
          {/* logo */}
          <Link href={'/'} className="flex gap-2 items-center justify-center">
            {/* logo icon */}
            <Image
              src={'/brandings/hedera-logomark.svg'}
              alt={'hedera-logomark'}
              width={30}
              height={30}
              className="z-50"
            />

            {/* logo text */}
            <p className="text-white">Hedera</p>
          </Link>

          {/* copyright */}
          <p className="font-light text-sm">
            &copy; 2018 - {new Date().getFullYear()} Hedera Hashgraph, LLC.
          </p>
        </div>

        {/* social media */}
        <div className="flex items-center justify-center gap-4 md:justify-start lg:gap-6">
          {HEDERA_SOCIAL_MEDIA.map((media) => {
            return (
              <Link key={media.name} href={media.link} target="_blank">
                <Image
                  src={`/assets/socials/${media.name}.svg`}
                  alt={media.name}
                  width={24}
                  height={24}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </HmotionFooter>
  );
};

export default Footer;
