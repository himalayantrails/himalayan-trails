import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrekDetailShortSummary from "./TrekDetailShortSummary";
import Collapsible from "../Collapsable/Collapsable";
import Gallery from "./Gallery/Gallery";
import Iternary from "./Iternary";

const TrekDetails = () => {
  const { trekDetail } = useParams();
  const [trekData, setTrekData] = useState(null);

  useEffect(() => {
    const fetchTrekData = async () => {
      try {
        const data = await import(`../../data/${trekDetail}.json`);
        setTrekData(data);
      } catch (error) {
        console.error('Error fetching trek data:', error);
      }
    };

    fetchTrekData();

  }, [trekDetail]);

  if (!trekData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container trek-details">
      <h1 className="text-align-center">{trekData.name}</h1>
      <div className="row">
        <TrekDetailShortSummary image={require('../../assets/region.png')} detail={trekData.place} />
        <TrekDetailShortSummary image={require('../../assets/duration.jpg')} detail={trekData.duration} />
        <TrekDetailShortSummary image={require('../../assets/altitude.jpg')} detail={trekData.altitude} />
        <TrekDetailShortSummary image={require('../../assets/distance.jpg')} detail={trekData.distance} />
        <TrekDetailShortSummary image={require('../../assets/grade.png')} detail={trekData.grade} />
        <TrekDetailShortSummary detail={trekData.brsLevel} title="Bikat Rating Scale" />

        <div className="col-12">
          <div className="col-3 col-sm-12 price-break-up">
            <div className="price-detail text-align-center">Price: {trekData.cost}</div>
            <div className="margin-top-10">Addons:</div>
            <ul>{trekData.addOns.map((item, index) => <li key={index}>{item.trim()}</li>)}</ul>
          </div>
        </div>

        <div className="col-12">
          <Collapsible title={`Why ${trekData.name} is breath taking?`}>
            <div>{trekData.detail}</div>
            <div className="margin-top-20 margin-bottom-10">{trekData.detail2}</div>
          </Collapsible>
        </div>

        {trekData.highlight &&
          <div className="col-12">
            <Collapsible title={`Highlights of ${trekData.name}`}>
              <div>{trekData.highlight}</div>
              <div className="margin-top-20 margin-bottom-10">{trekData.highlight2}</div>
            </Collapsible>
          </div>
        }

        {trekData.trekMeantFor &&
          <div className="col-12">
            <Collapsible title={`Trek Mean for ?`}>
              <div>{trekData.trekMeantFor}</div>
              <div className="margin-top-20 margin-bottom-10">{trekData.trekMeantFor2}</div>
            </Collapsible>
          </div>
        }

        <div className="col-12">
          <Collapsible title="Short Itinerary">
            <Iternary shortItinerary={trekData.shortItinerary} />
          </Collapsible>
        </div>

        <div className="col-12">
          <Collapsible title="Detailed Itinerary">
            <Iternary shortItinerary={trekData.detailedItinerary} />
          </Collapsible>
        </div>

        <div className="col-12">
          <Collapsible title="What is included">
            <ul>{trekData.whatIsIncluded.split("|").map((item, index) => <li key={index}>{item.trim()}</li>)}</ul>
          </Collapsible>
        </div>

        <div className="col-12">
          <Collapsible title="What is not included">
            <ul>{trekData.whatIsNotInluded.split("|").map((item, index) => <li key={index}>{item.trim()}</li>)}</ul>
          </Collapsible>
        </div>

        <div className="col-12">
          <Collapsible title="What to Pack">
            <ul>{trekData.packingList.split("|").map((item, index) => <li key={index}>{item.trim()}</li>)}</ul>
          </Collapsible>
        </div>

        <div className="row">
          <Gallery images={trekData.images} />
        </div>
      </div>
    </div>
  );
};

export default TrekDetails;
