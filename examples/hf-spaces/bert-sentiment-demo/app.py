import gradio as gr


TEMPLATE_NOTICE = (
    "This is a Hugging Face Spaces template only. "
    "The prediction function is a placeholder and does not run a real BERT model."
)


def predict(text: str) -> tuple[str, float]:
    """Placeholder prediction function.

    Replace this function with real tokenizer/model inference after the model,
    dataset license, evaluation results, and public release boundary are reviewed.
    """
    if not text.strip():
        return "TEMPLATE_ONLY_EMPTY_INPUT", 0.0

    return "TEMPLATE_ONLY_NOT_A_MODEL_RESULT", 0.0


with gr.Blocks(title="BERT Sentiment Demo Template") as demo:
    gr.Markdown(
        """
        # BERT Sentiment Demo Template

        This Space is a template for a future sentiment-analysis demo.
        It does not load model weights and does not produce real model predictions.
        """
    )

    gr.Markdown(f"**Public release note:** {TEMPLATE_NOTICE}")

    text_input = gr.Textbox(
        label="Input text",
        placeholder="Enter an English or Chinese sentence...",
        lines=4,
    )
    label_output = gr.Textbox(label="Label")
    confidence_output = gr.Number(label="Confidence")
    predict_button = gr.Button("Run placeholder prediction")

    predict_button.click(
        fn=predict,
        inputs=text_input,
        outputs=[label_output, confidence_output],
    )


if __name__ == "__main__":
    demo.launch()
