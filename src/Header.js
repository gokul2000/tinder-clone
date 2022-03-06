import React from 'react'
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from "@material-ui/icons/Forum"


function Header() {
  return (
    <div className="header">
      
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIPEhAPEA8SDxIQEhEUDw8SEBgSEA8SGBgZHBoUGBgcIy4lHB4sHxgcJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhERHDYlGCExNDQxNDQ0MTExMTE2MTQ0MTQ0NDE0NDE0NzE0MTQ0NDE0NDQ0MTE0NDQ0NDQxNDE0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAYHBf/EADwQAAIBAQQHBwMDAgQHAAAAAAABAgMEESExBRITQVGBoQYiMmFxkbEUUtFiwfAjQlNygpMVJDNEY3OD/8QAGgEAAwADAQAAAAAAAAAAAAAAAAECBAUGA//EADIRAQACAQIEBAMGBwEAAAAAAAABAgMEEQUSITFBUXHRYZGxIjJCocHwEzNigYLh8ST/2gAMAwEAAhEDEQA/APZRK3hfL5JtY8ejFnJNNJ3t5IAzF9m38hNlLh1Q1PuX62F+W8A0GWv4nyLtrHj0ZVOLk70r1xAKjcjLspcOqLtrHj0YAavhZkNMpKSaTvbyRVspcOqAHs+8vM9Nal+thflvLNrHj0YBVX8XJFRdOLk744riLspcOqAJb6soUas4XOUacpQTyvSvRyGje21/ctUM8NrBZesfwdjXalCcb84SV3I8ZqRuk1wbQ4brhWmw6imSuSN5jbafGO71uzWmnVip05xnF5Si70a7Pm/Q8hsGkKtnlrUpuL3r+2Xk1vO70B2qpV7oVrqNR4LH+nJ+T3ejDZ5azhWXBven2qfnHrH6w6szWjxci3ax49GVVIuTvjihNUqNscl6IzbKXDqi7aJYN5YMAapk/RmM0ymmmk728EVbKXDqgBrPm/Q0GemtV3vBZFm1jx6MArtGa9PyUl1SOs71irrhdlLh1QAhB9lLh1RACsso+Jc/gf6f9XQGz1O9ffduANBRad3Mn1H6epPH5Xc8wCg1UPCuYn0/6uhNfV7t192/IAvMLL/qP09SbDz6AFdLxI1lGz1e9ffduuJ9R+nqAS0ZIoL79fDK7mT6f9XQAej4fcsKNfV7t1/nkT6j9PUApeb5nkVqjdUmuEpfLPY9jvv88jx61Yzm+MpfLCG+4F97J6QoAmFohbpHR6B7USo3U67dSnkpZzh+V5HoVgrwqU41ISUoyxUk70zxk+roHTtSxTwetTk+/TeUvNcGKYabX8Krl3yYel/Lwn2l62Yp5v1ZXo/StO0QVSm9ZPNX96L+1rczVsb8b88ciXL2rNZmto2mFVPxL1RsM+y1e9ffdjdcH6j9PUCG05L1M5fra+GV2PEn0/6ugA1DLmWlGtqd3PffkT6j9PUA0EKNv5dSAFxXW8L5fJTtpceg0ZuT1XinmAUl9m38h9lHh1Eqd27Vwvz3gF5lr+J8ibaXHoWQgpLWeLYBnNyK9jHh1KdrLj0AL6vhZkLoTcnc8nmWbKPDqAJZ95eUVFq+HC/PeJtpcegAa/i5IqNEIqSveLG2MeHUAS1z1Kc5P+2nJ+yPG6jvbfF3npnae1allrY+Jai/1YfF55mDpOB02x3v5zEfKP8AZGBjAG3gAC0Qo27Q+lp2SanB3xfjg33ZL8+Z6poy3wtNKNWm74tXNb4yWcX5njh9TQGmZ2OprJtwdyqQ3SXFeaCY3aviXD41Feen8yPz+HtP9nrVTJ+jMZLLa1WjCcGpQmk01vTNWyjw6kOTmJidp7q7Pm/Q0FE1qq+ODy4ibaXHoBDaM16fkqNEI6yvli8uA2yjw6gGYhq2MeHVkAMhZR8S5/BquK63hfL5ALCi07uZReX2bfyAKDVQ8K5llxlreJ8gDUYWZtIaQhZoa9SV32xXim+CRxmltPVrS7tZ04f2wg7r/OT3sm14hm6XQ5dRO8dK+c/vq7+l4kazDo+pr2alK+9ypQve9u5EvKYdo2mY8l9oyRQX0N5fcBK6Ph9ywzV/FyRRWqqnGVSTujBOUnwSAR16OV7c2zGnQT368+qivk4426UtjtFWdWX9zdy+1LBL2MjRO7tdHg/gYK457x39fEooxBsogGMwFGAAtEKN0nY/TewqKhUl/SnJareVOfH0Z6WeHpnonZLSztFLZzlfUpJJ3vGcN0vXcKYc9xjRbf8Aop/l7+7prTkvUzl1nzfoaLiXPqqGXMtM9oz5FN4BvIYbyAGraR4izkmmk728kZiyj4lz+AAbKXAspd2/WwvuuLyi0buYBZtI8T5Om9KQs0dZ96UsIQTxb4vyG0hbYWenKpPdhGO+ctyRwFttc685VJu9vJborgvI88l+XpHdsdBov49ua33I/P4e5LZa515uc5azftFcEtyM44Dw3dNWIrG0doeh9mK6nZKcb+9HWjd6N3dLj6OylwOZ7EWj/qUnnF6y9Grn8I7EyazvEOS1uPk1F6/Hf59WektW/WwvyLdpHiV2nJFBTFXVIuTvWK4nFdrtLXv6aDwi76sk8G/t/Jv0/wBpFSi6NB31HepTWVPyXGXwcQ8cXzZFreDe8L0E7xnyR27R+vt+91AMAl0BWhRwNFRJlFYxCjIBoZgKMDXoi3Ss1aFWO53SX3ReaMjIUV6VvWa27S9kslVSjGad8ZRTjLc08TRtI8TkexWktpRdnk75UXfHzpv8P5R0ZDhtRgnBltjnw+ngtqR1nfHFXXC7OXAuoZcy0Hiy7KXAhrIAZ/p/PoBU9XvX33bjQV1vC+XyAL9QuAs5KSbb1VFNtvh/EUnxO02kdnT2MHdKrn5QWfuTa0VjeXrhxTmyRSveXP6e0g7RUdz/AKcW1BcVx5nzAgMKbbzvLrsdK46xSvaCtECRob0b+z9t+ntEJvwt6kv8st/wz0fbrh1PKD6se0NojTjSjJR1Vdr3Xya3Zntjvt0lrOIaG2e1b49t+0+7ubbb6VOOtUmoJZX4uXklmzjtMdpJ1b6dG+nB4OWU5r9kfDrVpTblOTk3vk72IOckz2VpeGY8X2r/AGrflH9vdWwDEaE2pCBAMwAMAoytCjgaKiTKKxiFGQDGYCjfR7OWzYWmlK+6MpKM/wDLJ3X8sHyPVth5njCPW9AWvb2ajUzbgoy/zRwfwEue45h60zR6T+jYpandeO8P1C4CWjNen5KhNA0fULgQoIAWbaXl7BhUcnqvJlJZR8S5/ABbKnFLHLfieb6VtW3q1Km5u6K4RWC/nmdx2itOys1RrBzupr/Vn0vPPLjF1Fu1W74Ti6Wyz6R+oCjgPBuiijAK3MGgBAxmBAgKiTIwFgjKMGhRiMpRCBAMwAMAoytCjgaKiTKKxiFGQ7zsJa3satK/wSTS8pJfumcIzpew1XVr1I/fTb5xcfyUwOJ059Lf4dfk9BhHXV8s8h9jH+MFDLmWicer2Mf4yFpABblwXsJVXdf83h148ULUkmmk728kAcp2trO6lC/7pP4X7nMn3O1be3jF7qUerkfDNfmne8uo0FeXT0+MblaIMK0QzAFHAUZRRiFGRkCRjMpAilRJlYCwRlGVoAxGilEZAgGYAGAUZWhRwNFRJlPs9j6mrbaHCWvF84y/dI+MfT7Nu612d/8Akj1wKeOpjmwZI/pn6S9Qru54YYFWs+LLaq1nfHFXbhNnLgxuHDWfF+4SbOXBkAELKPiXP4G2D4oKp6vebvu3AHHdr1/zH/zh8s+EdD2vV9anK7Okl7Sf5OfNbl+/Z1OjnfT09AAEhDKI0QYVoowFHAUZADAHEmDQAgaLMoQijiTKwFghRlaAMBopRSBAMwAMAoytG/s+r7VQ/wDZDozCfW7LUta10LtzlJ+V0WVDy1NuXDef6Z+j02hlzLShS1MHjvwG264Mtw64hTt1wYAC4rq+F8vkq28vIkZuT1XkwDm+1VPu0pcG4++P7HNHddobIp2eo1nC6a5Z9GzhTX6mNsm/m6Hht+bBt5SUAzAeLYgAJBmRkGFaKMBRwFGQAxGVBlYAkZRkCEUcSZWgFgjKMrQBiNFKIQICokwOo7B0L69Sd2EKbXOTX4OYO67FUXToTqXY1Z3/AOlYLreVXuwOJ5OTS2856OjtGa9PyVF8Y62Ms8sBtjHz9z0ckzkNOwj5+5ADKWUfEufwadVcF7CVcE7sPNABqQUouLV6kmmvJnm9soOlUnTlnGTX4Z32u+L9zm+09ketGulhK6M357n7fBi6qm9ebybLhmXkyTSfxfVzwGOKzBb8oBmBlGAAkGZGiDCtFGAo4CjIwDAY4kwaAEDKMoQilmVgLBGMytAGA0UoaFJzlGEVe5SUUvNu49PslnVKEKccoRUfW5ZnL9idHa9SVoksKauh5ze/kvk7vVXBex60jpu5zjGo58kYo7V7+s+0K6GXMtM1d3PDDDdgV674v3LaduIYtZ8X7hANOuuK9xKkk00ne+CMxZR8S5/AAupL7X7C2izRqU5054KSuTe57mvQ3FFo3cxTG/STiZid47vO7VQlTnKEs4tr180VHV6d0btY7SK78Fivvjw9TlGavLjnHbbw8HTaXURmpzeMdykGFZDKKwDMDKMABIMyNEGFaKMBRwFGRgGAxmDAEjRZkCEUcSZWXWOyzrVIU4K9ydy8uLfkVpX4LFvJb2egdmNC/Tw2s1/Vmsv8OP2+vE9KxuxdZqq6fHzfint+/J9DRlkjZ4RppXKKuveGtLNs3a64r3K7RkvUzmQ5K1ptMzPeVtZazvWOG7ETUl9r9i+hlzLQJk1H9r9iGwgBm2D4oig44vFLhmaCut4Xy+QAbdcGLLv5YXcfMoL7Nv5AA2D4o5zT2h86tJXvOpBb/wBUTqzLX8T5EZMcXjaXrhzWw356/wDXnLRDqNK6FU750rozzlHKMvTgzmqtKUJOE4uMlmmrmjWZMdsc7S6PT6mmau9e/l4qmQYVkskoBxWUYACAZlaIMK0UYCjgKMjAMRlQZGiJX4JXt5JZsus9nnVkowg5N5JfzA7jQXZ2FnuqVLp1M1vjD04vzPSlZsxtTrMenr9rrbwj99mPs32fdLVtFZd9Ywg84+b8zp9uuDHqZP0ZjMqIiI2hzGfPfNfnvPX6L5S18FhdjiDYPiiWfN+hoG8VEZandeO/Abbrgyu0Zr0/JUAaduuDIZyAFu3fBEjNyeq7rnwzKSyj4lz+AC3YLzFl3Mt/EvKLTu5gA274IaMFLvPN8MjOaqHhXMAGxXmYNIWOnaFdOKvWUlhOPM+oYWKYiY2k62ms71naXK23QNSF7h/Uj5eNct/I+RODi2mmms01c0eiUvEhrVYaVZf1KcZ+bWPusTFvpIn7s7Npi4paOmSN/TpLzZgZ19s7M086c5Qv3PFL9z5VXs7VXhlCfNxfU8JwZI8Gwpr9Pb8W3q+IyH0p6EtKx2MpLjF3/uVS0VaF/wBvV/22yOW0d4ZEZ8U9rR84YCGz/hlf/Aq/7bLKehbTK5KjJX8Xd8sqK28lTmxx3tHzh81oh0NDspXfjlThzcn0PoUuy1KCTqTlUe9Lux6Y9T1rivPgx78Q09Pxb+jjoU3NqMYtt5JK9s+/ovstUqXTrPZR+1Y1H+yOls9kp0ldCEYryWL5m+h4ebPeuCI7tdm4re3TFHL8fH2ZrHoulQjq046vF/3S82y51msMMMDQYp5v1Z79mqtabTvad5WKq5d13Y4FmwXmUU/EvVGwCUSWpit+GINu+CGtOS9TOAXqOvi/TAbYLzJQy5loBVsF5kLiAGEej4lz+CEANZRaN3MhACg1UfCufyQgBYYWQgA9LxI1kIAUWjcUEIAaaGXNlpCDJilmw0/EvUhBCGwpr5L1IQDZzTZ/DzZCAFpinm/VkIAGnmvVGwhACm0ZL1M5CAGihlzLiEAIQhAD/9k="
        className="header_logo"
        alt=""
      />
      <IconButton>
          <ForumIcon fontSize="large" className="header_icon"/>
      </IconButton>
    </div>
  );
}

export default Header