import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const Talktoour = () => {
  const ref = useRef();

  const navigate = useNavigate();

  const detailss = ref.current;

  const [checkinfo, checkInfo] = useState({
    checks: [],
    response: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8800/", {
        name: detailss.name.value,
        phone: detailss.phone.value,
        email: detailss.email.value,
        question: detailss.question.value,
        text1: detailss.text1.value,
        text2: detailss.text2.value,
        text3: detailss.text3.value,
        text4: detailss.text4.value,
        text5: detailss.text5.value,
        text6: detailss.text6.value,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));

    detailss.name.value = "";
    detailss.phone.value = "";
    detailss.email.value = "";
    detailss.question.value = "";
    detailss.text1.value = "";
    detailss.text2.value = "";
    detailss.text3.value = "";
    detailss.text4.value = "";
    detailss.text5.value = "";
    detailss.text6.value = "";

    swal("Good job!", "Succesfully added data to Database!", "success");

    // swal({
    //   title: "Are you sure?",
    //   text: "Once deleted, you will not be able to recover this imaginary file!",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
    //       navigate("/allData");
    //   } else {
    //     swal("Your imaginary file is safe!");
    //   }
    // });

    // getDetails();
  };

  const handleSubmitCh = async (e) => {
    e.preventDefault();

    const { value, checked } = e.target;
    const { checks } = checkinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      checkInfo({
        checks: [...checks, value],
        response: [...checks, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      checkInfo({
        checks: checks.filter((e) => e !== value),
        response: checks.filter((e) => e !== value),
      });
    }
  };

  return (
    <div className="md:bg-[#192240] w-auto h-auto bg-white xl:ml-0  ml-[-20px]">
      {/* <Navigate to="/allData" /> */}
      <div className="overflow-hidden  uppercase text-black md:text-white md:text-[40px] text-[25px] xl:pt-10 pt-0 pl-8 pb-5 font-Optima ">
        <h1 className="">Talk to Our realestate</h1>
        <h1>experts</h1>
      </div>
      <div></div>
      <div>
        <p className="md:text-[#A2A8BE] pl-8 md:w-[500px] md:text-[13px] text-[14px] pb-5  w-[340px] text-black">
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order typesetter likely
        </p>
      </div>
      <div className="pb-5">
        <form class="w-full  pr-8 pl-8 " ref={ref} onSubmit={handleSubmit}>
          <div className="">
            <input
              class="appearance-none bg-transparent border-b-2 border-black md:border-[#A2A8BE] w-full md:text-[#A2A8BE] text-black mb-5  leading-tight focus:outline-none"
              type="text"
              placeholder="Your Name *"
              name="name"
            />
            <input
              class="appearance-none bg-transparent border-b-2 border-black md:border-[#A2A8BE] w-full md:text-[#A2A8BE] text-black mb-5  leading-tight focus:outline-none"
              type="text"
              placeholder="Your Phone number *"
              name="phone"
            />
            <input
              class="appearance-none bg-transparent border-b-2 border-black md:border-[#A2A8BE] w-full md:text-[#A2A8BE] text-black mb-5  leading-tight focus:outline-none"
              type="email"
              placeholder="Your Email Address"
              name="email"
            />
            <input
              class="appearance-none bg-transparent border-b-2 border-black md:border-[#A2A8BE] w-full md:text-[#A2A8BE] text-black pb-8  leading-tight focus:outline-none"
              type="text"
              placeholder="Your Question*"
              name="question"
            />
          </div>

          <div>
            <p className="md:text-[#A2A8BE] text-black mt-5 cursor-pointer">
              How can we help?
            </p>
          </div>

          <div className="flex gap-5">
            <div className="mt-5 ">
              {/* {checklist1.map((id, index) => (
                <div className="flex items-center mb-4" key={id}>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-transparent bg-transparent border-white rounded " name={id.id}

                  />
                  <label className="md:text-[#A2A8BE] text-black pl-2">
                    {id.text}
                  </label>
                </div>
              ))} */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-transparent bg-transparent border-white rounded "
                  name="text1"
                  value="text1"
                  onChange={handleSubmitCh}
                />
                <label className="md:text-[#A2A8BE] text-black pl-2">
                  {" "}
                  test text
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-transparent bg-transparent border-white rounded "
                  name="text2"
                  value="text2"
                  onChange={handleSubmitCh}
                />
                <label className="md:text-[#A2A8BE] text-black pl-2">
                  test text
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-transparent bg-transparent border-white rounded "
                  name="text3"
                  value="text3"
                  onChange={handleSubmitCh}
                />
                <label className="md:text-[#A2A8BE] text-black pl-2">
                  test text
                </label>
              </div>
            </div>

            <div className="mt-5 ">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-transparent bg-transparent border-white rounded "
                  name="text4"
                  value="text4"
                  onChange={handleSubmitCh}
                />
                <label className="md:text-[#A2A8BE] text-black pl-2">
                  test text
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-transparent bg-transparent border-white rounded "
                  name="text5"
                  value="text5"
                  onChange={handleSubmitCh}
                />
                <label className="md:text-[#A2A8BE] text-black pl-2">
                  test text
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-transparent bg-transparent border-white rounded "
                  name="text6"
                  value="text6"
                  onChange={handleSubmitCh}
                />
                <label className="md:text-[#A2A8BE] text-black pl-2">
                  test text
                </label>
              </div>
            </div>
          </div>

          <div className="mt-2 mb-2">
            <button
              className="md:text-[#213065] text-white bg-[#213065]  md:bg-white h-10 w-full"
              // onClick={() => navigate("/allData")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Talktoour;
