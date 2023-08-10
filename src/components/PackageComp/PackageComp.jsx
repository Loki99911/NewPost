const { PackegeWrapper, PackegeText, PackegeAccentText } = require('./PackageComp.styled');

export const PackageComp = ({packageObj}) => {
  return (
    <PackegeWrapper>
      <PackegeText>
        <PackegeAccentText>Статус доставки:</PackegeAccentText>
        {packageObj.Status}
      </PackegeText>
      <PackegeText>
        <PackegeAccentText>Відправлено:</PackegeAccentText>
        {packageObj.WarehouseSender}
      </PackegeText>
      <PackegeText>
        <PackegeAccentText>Статус доставки:</PackegeAccentText>
        {packageObj.WarehouseRecipient}
      </PackegeText>
    </PackegeWrapper>
  );
};

