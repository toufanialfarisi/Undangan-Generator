import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  Grid,
  Typography,
  TextField
} from "@material-ui/core";
import CopyToClipboard from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    nama_tamu_undangan: "",
    output: []
  });

  const textChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
      output: e.target.value.split(" ")
    });
  };
  const URLUndangan =
    "https://app.momenkita.id/toufani-dinar?to=" +
    state.output.map((item) => item + "%20").join("");

  const TEXT = (
    <Typography variant="caption">
      `_Assalamualaikum Warahmatullahi Wabarakatuh_ Tanpa mengurangi rasa
      hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i{" "}
      <strong>{state.nama_tamu_undangan + " "}</strong>
      untuk menghadiri acara kami. *Berikut link undangan kami*, untuk info
      lengkap dari acara bisa kunjungi :{" "}
      <a href={URLUndangan} alt="url_undangan">
        <strong>{URLUndangan}</strong>
      </a>{" "}
      Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan
      untuk hadir dan memberikan doa restu. *Mohon maaf perihal undangan hanya
      di bagikan melalui pesan ini.* Dan karena suasana masih pandemi,
      diharapkan untuk *tetap menggunakan masker dan datang pada jam yang telah
      ditentukan.* Terima kasih banyak atas perhatiannya. _Wassalamualaikum
      Warahmatullahi Wabarakatuh_`
    </Typography>
  );

  // const HTMLPARSER = ReactHtmlParser(``);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container direction="column">
        <Grid item>
          <TextField
            name="nama_tamu_undangan"
            label="Nama Tamu Undangan"
            variant="outlined"
            value={state.nama_tamu_undangan}
            onChange={textChange}
          />
        </Grid>
        <Grid item>
          <CopyToClipboard
            text={`
            _Assalamualaikum Warahmatullahi Wabarakatuh_

              Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i *${
                state.nama_tamu_undangan + " "
              }* untuk menghadiri acara kami.

              *Berikut link undangan kami*, untuk info lengkap dari acara bisa kunjungi :

              ${URLUndangan}

              Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

              *Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.*

              Dan karena suasana masih pandemi, diharapkan untuk *tetap menggunakan masker dan datang pada jam yang telah ditentukan.*

              Terima kasih banyak atas perhatiannya.

              _Wassalamualaikum Warahmatullahi Wabarakatuh_

            `}
          >
            <Button variant="contained" disableElevation color="primary">
              Copy
            </Button>
          </CopyToClipboard>
          <a href={`https://app.momenkita.id/toufani-dinar?to=${URLUndangan}`}>
            <Typography variant="h5" style={{ marginTop: "5%" }}>
              {state.nama_tamu_undangan ? URLUndangan : ""}
            </Typography>
          </a>
        </Grid>
        <Grid item>
          <Divider style={{ marginTop: "5%" }} />
          {state.nama_tamu_undangan ? TEXT : ""}
        </Grid>
        <Grid item></Grid>
      </Grid>
    </form>
  );
}
