"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
  isExtend: boolean;
}

const FAQItem = (props: FAQItemProps) => {
  const { question, children, isExtend } = props;

  return (
    <div className="cursor-pointer border-2 rounded-2xl p-5">
      <div className="flex justify-between items-center">
        <div className="text-[#254441] text-lg">{question}</div>
        <div
          className={`ml-2 duration-100 ease-in ${
            !isExtend ? "rotate-0" : "rotate-180"
          }`}
        >
          <FaAngleDown />
        </div>
      </div>
      {isExtend && (
        <div className="text-[#505050] text-base mt-2">{children}</div>
      )}
    </div>
  );
};

const FAQList = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="grid gap-5">
      <div onClick={() => setSelectedIndex(selectedIndex == 0 ? -1 : 0)}>
        <FAQItem
          question="What is Topical Metformin?"
          isExtend={selectedIndex == 0}
        >
          Topical Metformin is Metformin HCL compounded into a lotion for
          transdermal administration by an FDA-regulated pharmacy. It is applied
          like a lotion and pushes Metformin into the body through the skin
          where it is absorbed into the blood stream. This process bypasses the
          gastrointestinal tract, allowing the medication to reduce the common
          GI side effects associated with Metformin. Our formulations are based
          on clinical studies of the use of Metformin and topical Metformin in
          treating acne, PCOS, melasma, and CCCA.
        </FAQItem>
      </div>
      <div onClick={() => setSelectedIndex(selectedIndex == 1 ? -1 : 1)}>
        <FAQItem
          question="How does Topical Metformin work?"
          isExtend={selectedIndex == 1}
        >
          Metformin helps lower blood sugar levels by reducing the amount of
          glucose produced by the liver and increasing the sensitivity of cells
          to insulin.
        </FAQItem>
      </div>
      <div onClick={() => setSelectedIndex(selectedIndex == 2 ? -1 : 2)}>
        <FAQItem
          question="Can Metformin cause my blood sugar to drop too low?"
          isExtend={selectedIndex == 2}
        >
          Metformin is not typically associated with a risk of reducing blood
          sugar to dangerously low levels. However, individual tolerance to
          lower blood sugar levels varies. Consequently, Metformin might cause
          symptoms of low blood sugar in some patients, such as lightheadedness,
          nausea, and fatigue. Starting at a low dose and gradually increasing
          it can be helpful. Based on our experience, most patients with a
          history of hypoglycemia can tolerate lower doses of Metformin, such as
          500mg per day.
        </FAQItem>
      </div>
      <div onClick={() => setSelectedIndex(selectedIndex == 3 ? -1 : 3)}>
        <FAQItem
          question="How does Metformin affect Vitamin B-12 levels?"
          isExtend={selectedIndex == 3}
        >
          It is commonly believed that Metformin can cause a reduction in
          Vitamin B12 levels, possibly by interfering with its absorption or
          through another mechanism. For this reason, we advise patients on
          Metformin to either monitor their B12 levels or take extra B12 as a
          precaution. However, some studies suggest there is no significant
          connection between Metformin use and B12 levels.
          <br />
          Regardless of Metformin use, it's important to maintain proper levels
          of Vitamin B12. For adults under 65, the easiest way to get B12 is to
          take at least one 2,000 mcg supplement each week or a daily dose of 50
          mcg. Note that these doses are specific to cyanocobalamin, the
          preferred supplemental form of Vitamin B12.
          <br />
          As we age, our ability to absorb Vitamin B12 may decline. For those
          over 65, especially those on plant-based diets, supplementation should
          probably be increased to 1,000 mcg of cyanocobalamin daily. B12
          supplements are very cheap. Here is one option we found: 5c per
          2500mcg tablet, so 5-15cents of cost per week depending on your age.
        </FAQItem>
      </div>
      <div onClick={() => setSelectedIndex(selectedIndex == 4 ? -1 : 4)}>
        <FAQItem
          question="Do I need to worry about lactic acidosis while I am taking Metformin?"
          isExtend={selectedIndex == 4}
        >
          The risk of significant lactic acidosis associated with metformin is
          extremely rare when the medication is taken at appropriate doses and
          when the kidneys are functioning properly. However, as a precautionary
          measure, we recommend that patients discontinue metformin usage at
          least 3 days prior to undergoing any medical procedure or imaging that
          involves the use of contrast agents, such as a CT scan.
        </FAQItem>
      </div>
      <div onClick={() => setSelectedIndex(selectedIndex == 5 ? -1 : 5)}>
        <FAQItem
          question="What are the side effects of Topical Metformin?"
          isExtend={selectedIndex == 5}
        >
          Like any medication, Metformin lotion has the potential to cause side
          effects. Be sure to follow up with a healthcare provider if you
          experience any of the following: Common side effects may include skin
          irritation at the application site.
        </FAQItem>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
      <section className="w-full mx-auto max-w-7xl mb-20 p-5">
        <h2 className="text-4xl font-bold my-10 text-center">Frequently Asked Questions</h2>
        <FAQList />
      </section>
  );
};

export default FAQSection;
