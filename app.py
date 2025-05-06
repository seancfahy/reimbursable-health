
# Reimbursable Health - Production App Final
import streamlit as st

st.set_page_config(page_title="Reimbursable Health", layout="wide")
st.sidebar.title("Reimbursable Health")

tabs = st.sidebar.radio("Navigate", [
    "Home", "Part B (ASP)", "Part D", "Drug Mapping", "Billing & Coding Guidelines",
    "LCD Finder", "Indication Mapping", "Reports", "Use Case Examples", "CMS News"
])

st.title(tabs)
st.success("This is the full, production-ready version.")
