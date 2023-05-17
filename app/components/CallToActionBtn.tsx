interface BtnProps {
  btnText: string;
}

export default function CallToActionBtn({ btnText }: BtnProps) {
  return <button className="action-button">{btnText}</button>;
}
