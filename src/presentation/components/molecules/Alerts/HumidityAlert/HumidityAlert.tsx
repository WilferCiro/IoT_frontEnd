import { IconAlertCircle } from "@tabler/icons-react";
import { Alert } from "@mantine/core";

interface Props {
  value1: number;
  value2: number;
}

const MIN_VALUE = 60;

const HumidityAlert = ({ value1, value2 }: Props) => {
  if (value1 <= MIN_VALUE || value2 <= MIN_VALUE) {
    return (
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="Nivel de humedad crítico"
        color="red"
      >
        El nivel de humedad es crítico para el sensor{" "}
        {value1 <= MIN_VALUE ? "1" : "2"}
      </Alert>
    );
  }

  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="Nivel de humedada correcto"
      color="green"
    >
      El nivel de humedad en ambos sensores es correcto
    </Alert>
  );
};

export default HumidityAlert;
