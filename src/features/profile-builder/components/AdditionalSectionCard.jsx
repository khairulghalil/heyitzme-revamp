import { Accordion, Button, Form } from "react-bootstrap";

function AdditionalSectionCard({
  builderProfile,
  handleChange,
  showAdditionalSectionList = false,
  setShowAdditionalSectionList,
}) {
  const sectionData = builderProfile?.additionalSection?.item;
  const sections = Array.isArray(sectionData)
    ? sectionData
    : sectionData && typeof sectionData === "object"
      ? [sectionData]
      : [];

  const addSection = () => {
    handleChange({
      target: {
        name: "additionalSection.item",
        value: [...sections, { enable: true, title: "", content: "" }],
      },
    });
  };

  return (
    <Accordion
      defaultActiveKey={showAdditionalSectionList ? "additional-section" : null}
      className="mb-3"
    >
      <Accordion.Item eventKey="additional-section">
        <Accordion.Header
          onClick={() =>
            setShowAdditionalSectionList(!showAdditionalSectionList)
          }
        >
          Additional Section
        </Accordion.Header>
        <Accordion.Body>
          {sections.map((section, index) => (
            <Form.Group
              className="mb-3"
              controlId={`additional-section-${index}`}
              key={index}
            >
              <div className="d-flex align-items-center justify-content-between mb-2">
                <Form.Label className="mb-0">
                  Section {index + 1} Title
                </Form.Label>
                <Form.Check
                  type="switch"
                  id={`additional-section-${index}-toggle`}
                  name={`additionalSection.item.${index}.enable`}
                  checked={section.enable ?? false}
                  onChange={handleChange}
                  aria-label={`Enable additional section ${index + 1}`}
                />
              </div>
              <Form.Control
                type="text"
                className="mb-2"
                name={`additionalSection.item.${index}.title`}
                value={section.title || ""}
                onChange={handleChange}
                placeholder="Section title"
              />
              <Form.Control
                as="textarea"
                name={`additionalSection.item.${index}.content`}
                value={section.content || ""}
                onChange={handleChange}
                rows={3}
                placeholder="Section content"
              />
            </Form.Group>
          ))}
          <Button type="button" variant="secondary" onClick={addSection}>
            Add section
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AdditionalSectionCard;
