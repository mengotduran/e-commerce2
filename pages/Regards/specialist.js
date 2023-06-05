import SECTION2 from "../../src/components/FirstDropdown/section2";

const Specialist = ({data}) => {
  return (
    <div>
        <SECTION2 data={data}/>
    </div>
  );
};

export default Specialist;

export async function getStaticProps() {
  const {specialist} = await import('/data/data.json')
  return {
    props: {
      data: specialist,
    }
  }
}