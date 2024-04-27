"use client";

interface PromiseItemProps {
  content: string;
  heading: string;
  avatar: string;
}

const PromiseItem: React.FC<PromiseItemProps> = ({
  content,
  heading,
  avatar,
}) => {
  return (
    <div className="w-full text-center">
      <div className="w-fit mx-auto">
        <img src={avatar} alt="promise" />
      </div>
      <h3 className="my-5 text-2xl font-bold">{heading}</h3>
      <p className="text-base text-[#505050]">{content}</p>
    </div>
  );
};

export default PromiseItem;
