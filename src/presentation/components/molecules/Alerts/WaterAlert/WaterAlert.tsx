import { IconAlertCircle } from "@tabler/icons-react";
import { Alert } from "@mantine/core";

interface Props {
  value: number;
}

const WaterAlert = ({ value }: Props) => {
  if (value <= 10) {
    return (
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="Nivel de agua crítico"
        color="red"
      >
        El nivel de agua es crítico, por favor rellene el tanque
      </Alert>
    );
  }

  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="Nivel de agua correcto"
      color="green"
    >
      El nivel de agua es correcto
    </Alert>
  );
};

export default WaterAlert;
