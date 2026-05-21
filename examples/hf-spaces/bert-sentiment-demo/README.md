# BERT Sentiment Demo Template

This folder is a Hugging Face Spaces template for a future BERT sentiment-analysis demo.

It is not a real model demo yet. The current `predict()` function returns placeholder output only, and the template does not download or load model weights.

## Local Run

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the Gradio app:

```bash
python app.py
```

Open the local URL printed by Gradio in the terminal.

## Upload To Hugging Face Spaces

1. Create a new Hugging Face Space.
2. Select `Gradio` as the Space SDK.
3. Upload `README.md`, `app.py`, `requirements.txt`, and `.gitignore`.
4. Wait for the Space build to finish.
5. Test the page and confirm the public note clearly says it is a template if the real model has not been connected.

Do not upload model weights, raw datasets, private coursework files, API keys, tokens, or any large generated outputs.

## Embed The Space In The Main Site

After a real Space is created and reviewed, use the site component like this in an MDX page:

```mdx
import SpaceEmbed from '@site/src/components/SpaceEmbed';

<SpaceEmbed
  title="BERT Sentiment Analysis Demo"
  spaceUrl="PASTE_REVIEWED_SPACE_URL_HERE"
/>
```

Do not use a placeholder URL in the public site. If the Space is not real yet, leave `spaceUrl` empty so the site shows `Demo coming soon`.

## Replace Placeholder Inference

When the real model is ready, replace this function in `app.py`:

```python
def predict(text: str) -> tuple[str, float]:
    ...
```

The replacement should:

- Load only the reviewed model artifact needed for inference.
- Document the model source and dataset license.
- Return a real `label` and `confidence`.
- Avoid exposing secrets or private paths.
- Avoid claiming performance metrics that have not been evaluated and reviewed.

## Public Release Boundary

Before publishing or linking this Space from the main site, confirm:

- No API key, token, password, or private environment file is committed.
- No original private data, coursework archive, internal material, or model weights are committed by accident.
- The UI does not imply the placeholder output is a real prediction.
- The main website does not show a Demo button or embedded Space until the URL is real.
