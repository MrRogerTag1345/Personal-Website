import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa'; // Example icons
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#ffffff' }}
          icon={<FaGraduationCap />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Jean Augustine Seconday School</h3>
          <h4 className="vertical-timeline-element-subtitle">Brampton, ONT</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: 'white' }}>2020 - present</span>}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#ffffff' }}
          icon={<FaGraduationCap />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Wilfrid Laurier University</h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ONT</h4>
          <p>
            Algorithms, Data Structures, Machine Learning, Ai, Compilers, Operating Systems.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: 'white' }}>2021 - 2022</span>}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          icon={<FaBriefcase />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Advanced Servo Technologies Inc</h3>
          <h4 className="vertical-timeline-element-subtitle">Brampton, ONT</h4>
          <p>
            Purchasing Assistant/ Technician Assistant 
            <p></p>
            <br />
            Purchasing replacement components, such as Capacitors, Integrated Circuits, Transistors, Resistors, and Transformers, improved purchasing decisions by 10%.
            <br />
            <span className="bullet-point">&bull; Assisting technicians in researching and finding suitable replacement units, and improved time management by 20%.</span>
            <br />
            <span className="bullet-point">&bull; Worked with managing customer orders, using Salesforce.</span>
            <br />
            <span className="bullet-point">&bull; Worked with suppliers and distributors for receiving parts.</span>
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: 'white' }}>2022 - present</span>}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          icon={<FaBriefcase />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Delivery Driver</h3>
          <h4 className="vertical-timeline-element-subtitle">Brampton, ONT</h4>
          <p>
            <span className="bullet-point">&bull; Delivering Food to Customers. </span>
            <br />
            <span className="bullet-point">&bull; Occasional Kitchen Assistant </span>
            <br />
            <span className="bullet-point">&bull; Cleaning up the restaurant. </span>
            <br />
            <span className="bullet-point">&bull; Assisting Cook where ever possible. </span>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: 'white' }}>Jun 2024 - present</span>}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          icon={<FaBriefcase />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Mycro Harvest INC</h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ONT</h4>
          <p>
            <span className="bullet-point">&bull; Improved Front-End Visuals. </span>
            <br />
            <span className="bullet-point">&bull; Worked on Capturing Data, and Labeling Mushroom Characteristics. </span>
            <br />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fffff' }}
          icon={<FaStar />} // Placeholder icon
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
