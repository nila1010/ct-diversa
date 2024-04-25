// Bar.js
const Bar = ({ impact }) => {
    const backgroundColor = getImpactColor(impact);
    
    return (
        <div style={{ width: '200px', height: '20px', backgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ padding: '0 10px', display: 'block' }} className="text-sm">{impact}</span>
        </div>
      );
  };
  
  const getImpactColor = (impact) => {
    switch (impact) {
        case 'Kritisk': 
          return 'var(--colors-brand-orange-70)'; 
      case 'Seriøs': return 'var(--colors-brand-orange-70)';
      case 'Moderere': return 'var(--colors-brand-yellow-100)';
      case 'Mindre': return 'var(--colors-brand-turquoise-50)';
      default: return '#ccc';
    }
  };
  
  export default Bar;
  